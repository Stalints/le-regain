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

const requiredBlogFields = ['title', 'category', 'excerpt', 'content'];

function hasMissingRequiredFields(body) {
  return requiredBlogFields.some((field) => {
    const value = body?.[field];
    return value === undefined || value === null || String(value).trim() === '';
  });
}

function isAuthorized(request) {
  const authorization = request.headers.get('authorization');
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    return process.env.NODE_ENV !== 'production';
  }

  return authorization === `Bearer ${adminApiKey}`;
}

export async function POST(request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized admin request.',
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    if (hasMissingRequiredFields(body)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required blog fields.',
          requiredFields: requiredBlogFields,
        },
        { status: 401 },
      );
    }

    const blogDate = body.date ? new Date(body.date) : new Date();

    if (Number.isNaN(blogDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid blog article date.',
        },
        { status: 401 },
      );
    }

    const blogPost = await prisma.blogPost.create({
      data: {
        title: String(body.title).trim(),
        category: String(body.category).trim(),
        excerpt: String(body.excerpt).trim(),
        content: String(body.content).trim(),
        date: blogDate,
      },
    });

    return NextResponse.json(
      {
        success: true,
        blogPost,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Blog POST failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to create blog article.',
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      orderBy: {
        date: 'desc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        blogPosts,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Blog GET failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to fetch blog articles.',
      },
      { status: 500 },
    );
  }
}
