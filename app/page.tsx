import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Indie Game Connect
            </span>
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4 max-w-3xl mx-auto">
            Connect to your indie game community, organize your players with mailing list integration, testing, and networking with other devs!
          </p>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Manage Devlog newsletter subscriptions, swap guest features with other developers, and conduct seamless beta tests with feedback reminders all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 px-10 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Showcase on Homepage */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit designed specifically for indie game developers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              title="Landing Pages"
              description="Build your audience fast by collecting emails on beautiful, conversion-optimized landing pages."
              icon="📧"
              color="from-blue-400 to-blue-600"
            />
            <FeatureCard
              title="Email Blasts"
              description="Keep your players engaged. Schedule and send devlog updates and announcements effortlessly."
              icon="🚀"
              color="from-indigo-400 to-indigo-600"
            />
            <FeatureCard
              title="Newsletter Swaps"
              description="Network and connect with other developers to swap mailing lists and cross-promote your games."
              icon="🤝"
              color="from-purple-400 to-purple-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon, color }: { title: string; description: string; icon: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${color}`}></div>
      <div className="w-20 h-20 mx-auto flex items-center justify-center text-4xl mb-6 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
    </div>
  );
}
