'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border border-white/10">
      <div className="flex items-center justify-between space-x-8 text-sm sm:text-base text-white font-medium">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          <span className="text-purple-400">Sask</span>
          <span className="text-calypso">Dev</span>
        </Link>

        {/* Links */}
        <div className="flex space-x-6 ml-6">
          <Link href="#about" className="hover:text-calypso transition relative group">
            <span className="group-hover:border-b-2 group-hover:border-calypso pb-0.5 transition-all">
              About
            </span>
          </Link>
          <Link href="#services" className="hover:text-calypso transition relative group">
            <span className="group-hover:border-b-2 group-hover:border-calypso pb-0.5 transition-all">
              Services
            </span>
          </Link>
          <Link href="#plans" className="hover:text-calypso transition relative group">
            <span className="group-hover:border-b-2 group-hover:border-calypso pb-0.5 transition-all">
              Plans
            </span>
          </Link>
          <Link href="#contact" className="hover:text-calypso transition relative group">
            <span className="group-hover:border-b-2 group-hover:border-calypso pb-0.5 transition-all">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
