import { NextRequest, NextResponse } from 'next/server';
import { sendSubscriptionEmail } from '@/app/utils/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, newsletterName } = body;

    if (!email || !firstName || !newsletterName) {
      return NextResponse.json(
        { message: 'Email, first name, and newsletter name are required' },
        { status: 400 }
      );
    }

    // In a real application, you would save the subscription to the database here
    
    // Send subscription email
    await sendSubscriptionEmail(email, firstName, newsletterName);

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'An error occurred during subscription' },
      { status: 500 }
    );
  }
}
