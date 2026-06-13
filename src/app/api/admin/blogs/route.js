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
    // Key not configured — allow in dev, block in prod
    return process.env.NODE_ENV !== 'production';
  }

  return authorization === `Bearer ${adminApiKey}`;
}

// GET /api/admin/blogs — list all blog posts
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

// POST /api/admin/blogs — create a blog post
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
        { status: 400 },
      );
    }

    const blogDate = body.date ? new Date(body.date) : new Date();

    if (Number.isNaN(blogDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid blog article date.',
        },
        { status: 400 },
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

// DELETE /api/admin/blogs?id=<blogPostId> — delete a blog post
export async function DELETE(request) {
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post id is required.',
        },
        { status: 400 },
      );
    }

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    // P2025 = record not found
    if (error?.code === 'P2025') {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found.',
        },
        { status: 404 },
      );
    }

    console.error('Blog DELETE failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to delete blog article.',
      },
      { status: 500 },
    );
  }
}

// PATCH /api/admin/blogs?id=<blogPostId> — update a blog post
export async function PATCH(request) {
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post id is required.',
        },
        { status: 400 },
      );
    }

    const body = await request.json();

    // Only allow updating known mutable fields
    const allowedFields = ['title', 'category', 'excerpt', 'content', 'date'];
    const data = {};

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        if (field === 'date') {
          const d = new Date(body.date);
          if (Number.isNaN(d.getTime())) {
            return NextResponse.json(
              { success: false, error: 'Invalid date.' },
              { status: 400 },
            );
          }
          data.date = d;
        } else {
          data[field] = String(body[field]).trim();
        }
      }
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { success: false, error: 'No valid fields to update.' },
        { status: 400 },
      );
    }

    const blogPost = await prisma.blogPost.update({
      where: { id },
      data,
    });

    return NextResponse.json(
      {
        success: true,
        blogPost,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error?.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: 'Blog post not found.' },
        { status: 404 },
      );
    }

    console.error('Blog PATCH failed:', error);

    return NextResponse.json(
      { success: false, error: 'Unable to update blog article.' },
      { status: 500 },
    );
  }
}
