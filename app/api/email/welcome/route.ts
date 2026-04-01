import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/app/utils/mailer';

export async function POST(request: NextRequest) {
    try {
        const { email, firstName } = await request.json();

        if (!email || !firstName) {
            return NextResponse.json(
                { error: 'email and firstName are required' },
                { status: 400 }
            );
        }

        const result = await sendWelcomeEmail(email, firstName);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Failed to send welcome email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Welcome email sent', id: result.id }
        );
    } catch (error) {
        console.error('Error in welcome email route:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}