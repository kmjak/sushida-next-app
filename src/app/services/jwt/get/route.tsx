import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const SECRET_KEY = '0rig1nal-Typing-G4me-SECRET_keY';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'トークンがありません' }, { status: 403 });
    }
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return NextResponse.json({ id: decoded.id });
  } catch (err) {
    return NextResponse.json({ message: 'トークンが無効です' }, { status: 401 });
  }
}