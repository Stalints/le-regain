import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

const weekdaySlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
const saturdaySlots = ['09:00', '10:00', '11:00', '12:00', '14:00'];

function getClinicSlots(dateValue) {
  const [year, month, dayOfMonth] = dateValue.split('-').map(Number);
  // Use UTC noon to avoid any DST-related off-by-one on the day boundary
  const day = new Date(Date.UTC(year, month - 1, dayOfMonth, 12)).getUTCDay();

  if (day === 0) {
    // Sunday — closed
    return [];
  }

  if (day === 6) {
    return saturdaySlots;
  }

  return weekdaySlots;
}

function getKochiTimeKey(date) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  }).format(date);
}

// GET /api/appointments/slots?date=YYYY-MM-DD&branch=...&clinicType=... (public)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const branch = searchParams.get('branch');
    const clinicType = searchParams.get('clinicType');

    if (!date || !branch || !clinicType) {
      return NextResponse.json(
        {
          success: false,
          error: 'Date, branch and clinic type are required.',
        },
        { status: 400 },
      );
    }

    const dayStart = new Date(`${date}T00:00:00+05:30`);
    const dayEnd = new Date(`${date}T23:59:59.999+05:30`);

    if (Number.isNaN(dayStart.getTime()) || Number.isNaN(dayEnd.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date.',
        },
        { status: 400 },
      );
    }

    const slots = getClinicSlots(date);

    if (slots.length === 0) {
      return NextResponse.json(
        {
          success: true,
          slots: [],
        },
        { status: 200 },
      );
    }

    const bookedAppointments = await prisma.appointment.findMany({
      where: {
        branch,
        clinicType,
        status: {
          not: 'cancelled',
        },
        date: {
          gte: dayStart,
          lte: dayEnd,
        },
      },
      select: {
        date: true,
      },
    });

    const bookedSlots = new Set(
      bookedAppointments.map((appointment) => getKochiTimeKey(appointment.date)),
    );

    const availableSlots = slots.filter((slot) => !bookedSlots.has(slot));

    return NextResponse.json(
      {
        success: true,
        slots: availableSlots,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Appointment slots GET failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to fetch available appointment slots.',
      },
      { status: 500 },
    );
  }
}
