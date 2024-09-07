import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { NextRequest } from 'next/server';

const SECRET_KEY = '0rig1nal-Typing-G4me-SECRET_keY';

export async function POST(req: NextRequest) {
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