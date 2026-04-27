"use client";

import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message: body }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setIsSubmitted(true);
      setEmail("");
      setSubject("");
      setBody("");
    } catch (err: any) {
      console.error("Contact Form Error:", err);
      setError(err.message || "An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-b from-primary-50 to-white min-h-[80vh] py-20 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Contact Us</h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto">
              Have a question, feedback, or need support? Send us a message and we&apos;ll get back to you!
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-200 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
              <p className="text-lg mb-6">Thanks for reaching out. We&apos;ve received your message and will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary-600 font-semibold hover:text-primary-800 transition-colors bg-white px-6 py-2 rounded-full shadow-sm border border-green-100 hover:shadow"
              >
                Send another message
              </button>
            </div>
          ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 text-sm font-medium">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200 font-medium text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this regarding?"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200 font-medium text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="body" className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="How can we help you today?"
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200 font-medium text-gray-900 placeholder-gray-400 resize-y"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-xl flex justify-center items-center gap-2 group ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-primary-700 hover:to-secondary-700 shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/30 hover:-translate-y-1'}`}
                >
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                  {!isLoading && (
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
