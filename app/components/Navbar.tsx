"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image 
                  src={isHovered ? "/Transparent_Animated_Blue_Game_Coin_GIF.gif" : "/Transparent_Animated_Blue_Game_Coin_Static.png"} 
                  alt="IndieGameConnect Logo" 
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-md"
                />
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
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/signin"
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
