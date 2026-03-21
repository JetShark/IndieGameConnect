import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="flex-1 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Powerful Features for <span className="text-primary-600">Indie Devs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build your audience, engage your players, and grow your game's community.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-block p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6 text-3xl">📧</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Collecting emails on a landing page</h2>
              <p className="text-lg text-gray-600 mb-6">
                Direct players to a beautiful, high-converting landing page designed to capture their interest and their email address. Build your list before your game even launches.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3"><span className="text-primary-500">✓</span> Custom branding</li>
                <li className="flex items-center gap-3"><span className="text-primary-500">✓</span> Give away a free prototype</li>
                <li className="flex items-center gap-3"><span className="text-primary-500">✓</span> Frictionless signup</li>
              </ul>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl p-8 shadow-inner flex items-center justify-center">
              <img src="/mockups/landing_page.png" alt="Landing Page" className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-gradient-to-tr from-purple-100 to-pink-50 rounded-3xl p-8 shadow-inner flex items-center justify-center">
              <img src="/mockups/devlog_editor.png" alt="Devlog Editor" className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex-1">
              <div className="inline-block p-4 rounded-2xl bg-purple-100 text-purple-600 mb-6 text-3xl">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scheduling email blasts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Keep your community in the loop. Send out rich-text devlog updates, new build announcements, or beta testing invitations on your schedule.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3"><span className="text-secondary-500">✓</span> Rich-text editor</li>
                <li className="flex items-center gap-3"><span className="text-secondary-500">✓</span> Image hosting included</li>
                <li className="flex items-center gap-3"><span className="text-secondary-500">✓</span> Open & click metrics</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-block p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-6 text-3xl">🤝</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Connecting with other devs to swap mailing lists</h2>
              <p className="text-lg text-gray-600 mb-6">
                Grow your audience exponentially by partnering with developers who make similar games. Agree to mutually promote each other's games to your respective audiences.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Developer Directory</li>
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Auto-Match system</li>
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Track swap performance</li>
              </ul>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-3xl p-8 shadow-inner flex items-center justify-center">
              <img src="/mockups/matchmaking_dashboard.png" alt="Developer Matchmaking Dashboard" className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/pricing"
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 shadow-md"
          >
            See Pricing & Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
