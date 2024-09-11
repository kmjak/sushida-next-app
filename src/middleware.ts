import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY!;

export async function middleware(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    if(!payload.id) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/game'],
};