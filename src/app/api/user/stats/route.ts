import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // TODO: Fetch user stats from database
    const stats = {
      totalNews: 0,
      publishedNews: 0,
      pendingNews: 0,
      totalViews: 0,
      totalLikes: 0,
    };

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
