import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">
                I
              </div>
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 tracking-tight">
                IndieGameConnect
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/pricing"
              className="bg-primary-600 text-white hover:bg-primary-700 px-5 py-2.5 rounded-full font-medium transition-transform hover:scale-105 shadow-md shadow-primary-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
