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

const allowedStatuses = new Set(['pending', 'confirmed', 'completed', 'cancelled']);

function isAuthorized(request) {
  const authorization = request.headers.get('authorization');
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    return process.env.NODE_ENV !== 'production';
  }

  return authorization === `Bearer ${adminApiKey}`;
}

// PATCH /api/appointments/[id] — update appointment status (admin only)
export async function PATCH(request, { params }) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized.',
        },
        { status: 401 },
      );
    }

    const resolvedParams = await params;
    const appointmentId = resolvedParams?.id;
    const body = await request.json();
    const status = body?.status ? String(body.status).trim().toLowerCase() : '';

    if (!appointmentId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Appointment id is required.',
        },
        { status: 400 },
      );
    }

    if (!allowedStatuses.has(status)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid status value.',
          allowedStatuses: Array.from(allowedStatuses),
        },
        { status: 400 },
      );
    }

    const appointment = await prisma.appointment.update({
      where: {
        id: appointmentId,
      },
      data: {
        status,
      },
    });

    return NextResponse.json(
      {
        success: true,
        appointment,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error?.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: 'Appointment not found.' },
        { status: 404 },
      );
    }

    console.error('Appointment PATCH failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to update appointment.',
      },
      { status: 500 },
    );
  }
}
