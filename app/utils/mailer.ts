import { Resend } from 'resend';
import { getWelcomeEmailHTML } from './emailTemplates/welcomeEmail';
import { getSubscriptionEmailHTML } from './emailTemplates/subscriptionEmail';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

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

export async function sendSubscriptionEmail(email: string, firstName: string, newsletterName: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: `Subscription Confirmed: ${newsletterName}`,
            html: getSubscriptionEmailHTML(firstName, newsletterName),
        });

        if (error) {
            console.error('Failed to send subscription email:', error);
            return { success: false, error };
        }

        console.log('Subscription email sent:', data?.id);
        return { success: true, id: data?.id };
    } catch (err) {
        console.error('Error sending subscription email:', err);
        return { success: false, error: err };
    }
}