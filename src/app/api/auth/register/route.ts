import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, password } = body;

    // TODO: Check if user exists
    // TODO: Hash password
    // TODO: Save to database

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      _id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: hashedPassword,
      role: 'user',
      verified: false,
      createdAt: new Date(),
    };

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
