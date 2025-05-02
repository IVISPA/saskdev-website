'use client';

import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-400 pt-12 pb-8 px-4 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-purple-400">Sask</span><span className="text-calypso">Dev</span>. All rights reserved.
        </p>

        <div className="flex justify-center space-x-4 text-xl">
          <a
            href="https://github.com/magdainalaf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-calypso transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/magdainalaf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-calypso transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-purple-600 hover:bg-calypso text-white p-3 rounded-full shadow-lg transition transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
