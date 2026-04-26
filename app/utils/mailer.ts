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

export async function sendContactEmail(replyToEmail: string, subject: string, message: string) {
    try {
        const adminEmail = process.env.ADMIN_CONTACT_EMAIL;

        if (!adminEmail) {
            console.warn('ADMIN_CONTACT_EMAIL is not set in environment variables. Falling back to default.');
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev', // Should have a verified domain for production in order to use contact@indiegameconnect.com
            to: (adminEmail || 'support@indiegameconnect.com').toLowerCase(),
            replyTo: replyToEmail,
            subject: `[Contact Form] ${subject}`,
            html: `<div style="font-family: sans-serif; color: #333;">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>From:</strong> ${replyToEmail}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr />
                    <p style="white-space: pre-wrap;">${message}</p>
                   </div>`,
        });

        if (error) {
            console.error('Failed to send contact email:', error);
            return { success: false, error };
        }

        console.log('Contact email sent:', data?.id);
        return { success: true, id: data?.id };
    } catch (err) {
        console.error('Error sending contact email:', err);
        return { success: false, error: err };
    }
}