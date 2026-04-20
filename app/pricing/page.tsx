import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="flex-1 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plans designed to scale with your studio, from your first game to managing multiple publishing labels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-500 mb-6 flex-1">Perfect for your first game release.</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$30</span>
              <span className="text-gray-500 font-medium">/year</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>1</strong> Mailing List</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Basic Email Collection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Group Promotions participation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Limited downloads/key claims</span>
              </li>
            </ul>
            <Link
              href="/auth/signup?plan=starter"
              className="w-full flex justify-center py-3 px-4 border border-primary-600 rounded-full shadow-sm text-sm font-bold text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="bg-gradient-to-b from-primary-600 to-secondary-600 rounded-3xl shadow-xl p-8 flex flex-col transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro Tier</h3>
            <p className="text-blue-100 mb-6 flex-1">For established indie studios.</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-white">$200</span>
              <span className="text-blue-200 font-medium">/year</span>
            </div>
            <ul className="space-y-4 mb-8 text-white flex-1">
              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">✓</span>
                <span><strong>Unlimited</strong> games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">✓</span>
                <span>Higher download/claim limits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">✓</span>
                <span>Direct Developer Newsletter Swaps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">✓</span>
                <span>Auto-Matching System</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">✓</span>
                <span>Advanced Mailing List Integrations</span>
              </li>
            </ul>
            <Link
              href="/auth/signup?plan=pro"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-primary-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Pro Trial
            </Link>
          </div>

          {/* Publisher Tier */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Publisher</h3>
            <p className="text-gray-500 mb-6 flex-1">For hit indies and small publishers.</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$300</span>
              <span className="text-gray-500 font-medium">/year</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Unlimited</strong> downloads & claims</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Manage Multiple Studio Names</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Priority Support</span>
              </li>
            </ul>
            <Link
              href="/auth/signup?plan=publisher"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
