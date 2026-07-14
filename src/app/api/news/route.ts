import { connectDB } from '@/lib/db';
import { generateNewsSummary, extractKeywords, analyzeSentiment } from '@/lib/ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, description, content, category, image } = body;

    // Generate AI data
    const [aiSummary, keywords, sentiment] = await Promise.all([
      generateNewsSummary(content),
      extractKeywords(content),
      analyzeSentiment(content),
    ]);

    // TODO: Save to database
    const news = {
      _id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      content,
      category,
      image,
      aiSummary,
      keywords,
      sentiment,
      status: 'pending',
      views: 0,
      likes: 0,
      comments: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    // TODO: Fetch from database
    return NextResponse.json([], { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
