import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { text, options = {} } = await req.json();
  if (!text) {
    return NextResponse.json({ success: false, error: 'No text provided' }, { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

    // put generationConfig here ↓
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: options.generationConfig ?? { temperature: 0.7 }
    });

    // generateContent now needs only the prompt
    const result = await model.generateContent(options.prompt ?? text);

    const enhancedText = result.response.text().trim();
    return NextResponse.json({ success: true, enhancedText });
  } catch (err) {
    console.error('Gemini error', err);
    return NextResponse.json({ success: false, error: 'Enhancement failed' }, { status: 500 });
  }
}