import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { NextRequest } from 'next/server';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

export async function POST(req: NextRequest) {
  if (!SECRET_KEY) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
  try {
    const { id } = await req.json();
    const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: '1h' });
    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60,
      path: '/',
    });
    const response = NextResponse.json({ message: 'ログイン成功' });
    response.headers.set('Set-Cookie', cookie);
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'リクエスト処理中にエラーが発生しました' }, { status: 500 });
  }
}