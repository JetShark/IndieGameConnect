"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SpaceWarLandingPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
          newsletterName: 'Space War Devlog',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your inbox for confirmation.');
        setFirstName('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Space War</h1>
          <p className="text-xl text-blue-100 mb-6">An epic galactic adventure awaits.</p>
          <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-lg overflow-hidden border-4 border-slate-800/50 shadow-inner bg-black">
            <Image
              src="/example-dev-templates/Spacewar.jpg"
              alt="Space War title screen"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Join the Resistance</h2>
            <p className="text-slate-300">
              Subscribe to the Space War Devlog to get exclusive behind-the-scenes updates, early access to playtests, and special rewards when the game launches.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-white"
                placeholder="Commander"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-white"
                placeholder="commander@earth.com"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe to Devlog'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center mt-4">
                {message}
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center mt-4">
                {message}
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
              &larr; Back to IndieGameConnect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
