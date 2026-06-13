import bcrypt from 'bcryptjs';
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

// POST /api/auth/login — authenticate an admin user
export async function POST(request) {
  try {
    const body = await request.json();
    const email = body?.email ? String(body.email).trim().toLowerCase() : '';
    const password = body?.password ? String(body.password) : '';

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email and password are required.',
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Use a constant-time response to prevent user enumeration
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email or password.',
        },
        { status: 401 },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email or password.',
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        session: {
          user: {
            id: user.id,
            email: user.email,
            createdAt: user.createdAt,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Admin login failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to authenticate admin user.',
      },
      { status: 500 },
    );
  }
}
