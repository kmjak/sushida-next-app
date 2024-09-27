import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    const { payload } = await jwtVerify(token!, new TextEncoder().encode(SECRET_KEY));
    if(!payload.id) {
      return NextResponse.json({ error: 'Token verification failed' }, { status: 200 });
    }
    return NextResponse.json({ id: payload.id });
  } catch (error) {
    return NextResponse.json({ error: 'Token verification failed' }, { status: 200 });
  }
}