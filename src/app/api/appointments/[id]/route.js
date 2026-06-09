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

export async function PATCH(request, { params }) {
  try {
    const resolvedParams = await params;
    const appointmentId = resolvedParams?.id;
    const body = await request.json();
    const status = body?.status ? String(body.status).trim().toLowerCase() : '';

    if (!appointmentId || !allowedStatuses.has(status)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Valid appointment id and status are required.',
          allowedStatuses: Array.from(allowedStatuses),
        },
        { status: 401 },
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
