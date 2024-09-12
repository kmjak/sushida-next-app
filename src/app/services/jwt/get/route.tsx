import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      throw new Error('No token found');
    }

    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    console.log('Token payload:', payload.id);
    if(!payload.id) {
      throw new Error('Invalid token');
    }
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'verified' }),
    };
  } catch (error) {
    console.error('Token verification failed:', error);
  }
}