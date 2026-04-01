import { Resend } from 'resend';
import { getWelcomeEmailHTML } from './emailTemplates/welcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, firstName: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Welcome to Indie Game Connect!',
            html: getWelcomeEmailHTML(firstName),
        });

        if (error) {
            console.error('Failed to send welcome email:', error);
            return { success: false, error };
        }

        console.log('Welcome email sent:', data?.id);
        return { success: true, id: data?.id };
    } catch (err) {
        console.error('Error sending welcome email:', err);
        return { success: false, error: err };
    }
}