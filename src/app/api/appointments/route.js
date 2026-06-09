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

const requiredAppointmentFields = ['name', 'phone', 'email', 'clinicType', 'branch', 'date'];

function hasMissingRequiredFields(body) {
  return requiredAppointmentFields.some((field) => {
    const value = body?.[field];
    return value === undefined || value === null || String(value).trim() === '';
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (hasMissingRequiredFields(body)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required appointment fields.',
          requiredFields: requiredAppointmentFields,
        },
        { status: 401 },
      );
    }

    const appointmentDate = new Date(body.date);

    if (Number.isNaN(appointmentDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid appointment date.',
        },
        { status: 401 },
      );
    }

    const appointment = await prisma.appointment.create({
      data: {
        name: String(body.name).trim(),
        phone: String(body.phone).trim(),
        email: String(body.email).trim().toLowerCase(),
        clinicType: String(body.clinicType).trim(),
        branch: String(body.branch).trim(),
        date: appointmentDate,
        status: body.status ? String(body.status).trim() : 'pending',
      },
    });

    return NextResponse.json(
      {
        success: true,
        appointment,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Appointment POST failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to create appointment.',
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        appointments,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Appointment GET failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to fetch appointments.',
      },
      { status: 500 },
    );
  }
}
