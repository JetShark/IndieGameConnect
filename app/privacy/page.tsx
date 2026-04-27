import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue mx-auto text-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 font-medium mb-10">Last Updated: April 24, 2026</p>

          <p>
            At IndieGameConnect, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website and platform (the &quot;Service&quot;).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. What Data We Collect</h2>
          <p>We collect information to provide, analyze, and improve our Service.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>User Account Data:</strong> When you sign up as a Developer or Player, we collect your name, email address, and hashed password.</li>
            <li><strong>Business-Specific Data:</strong> We store data required to operate the platform, including mailing list subscribers, devlog email contents, game keys (e.g., Steam keys), and campaign metrics (e.g., open rates, click rates, cross-promotion matches).</li>
            <li><strong>Google Analytics (GA4) Data:</strong> We use Google Analytics 4 to collect anonymized usage data, including page views, session duration, device information (e.g., browser type, operating system), and approximate geographic location based on IP addresses.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. How Your Data Is Used</h2>
          <p>We only use your data for legitimate business purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Account Data:</strong> Used to authenticate your login, manage your account, and send you critical platform updates or transactional emails (like Welcome Emails and Subscription Confirmations via the Resend API).</li>
            <li><strong>Business Data:</strong> Used to facilitate our core features, allowing Developers to distribute devlogs, swap newsletters with other creators, and distribute game keys to their subscribed Players.</li>
            <li><strong>Analytics Data:</strong> Used to understand how users interact with our platform, allowing us to identify bugs, optimize the user experience, and improve our services over time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. How Data is Stored and Protected</h2>
          <p>We employ industry-standard security measures to protect your personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using HTTPS/SSL.</li>
            <li><strong>Storage:</strong> Your data is securely stored in our PostgreSQL database.</li>
            <li><strong>Passwords:</strong> We never store plaintext passwords; all authentication credentials are securely hashed and salted using NextAuth.</li>
            <li><strong>Access Controls:</strong> Database access is strictly limited to authorized personnel required to maintain the platform infrastructure.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. User Rights</h2>
          <p>You have the right to control your personal data. Regardless of where you live, we offer the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Correct:</strong> You can update or correct inaccurate information within your account settings.</li>
            <li><strong>Right to Delete:</strong> You can request the complete deletion of your account and associated personal data at any time. Developers managing mailing lists must honor deletion requests from Players subscribed to their lists.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Cookie Policy</h2>
          <p>Our Service uses &quot;cookies&quot;—small text files stored on your device—to enhance your experience.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Authentication Cookies:</strong> Used by NextAuth to keep you securely logged into your account.</li>
            <li><strong>Google Analytics (GA4) Cookies:</strong> These third-party cookies track user behavior (as outlined in Section 1) to generate aggregated statistical reports. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on or by disabling cookies in your browser settings.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Regulatory Compliance</h2>
          <p>We design our data practices to comply with major global privacy frameworks:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>PIPEDA (Personal Information Protection and Electronic Documents Act):</strong> As a Canadian business, we strictly adhere to PIPEDA guidelines regarding consent, accountability, and the safeguarding of personal information.</li>
            <li><strong>GDPR (General Data Protection Regulation):</strong> For our users in the European Economic Area (EEA), we provide full rights to data portability, access, and deletion (the &quot;Right to be Forgotten&quot;). Developers acting as Data Controllers on our platform must also ensure their mailing lists are GDPR compliant.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us via the <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link> on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
