import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/app/utils/mailer';

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Email, subject, and message are required fields.' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(email, subject, message);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email via Resend API.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing the request.' },
      { status: 500 }
    );
  }
}
