'use client';

import Lottie from 'lottie-react';
import contactAnimation from '@/lotties/contactus.json';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4">
      {/* Title and intro */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Let’s <span className="text-purple-400">con</span><span className="text-calypso">nect</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have questions or want to build something together? Reach out and we’ll get back to you shortly.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Lottie Animation with natural glow */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradient-to-br from-purple-400/10 to-calypso/10 shadow-[0_0_80px_15px_rgba(168,85,247,0.2)]">
            <Lottie
              animationData={contactAnimation}
              loop
              style={{ maxWidth: 440 }}
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-center text-purple-400 mb-2">
            Let’s Talk
          </h3>
          <p className="text-center text-gray-400 mb-6 text-sm">
            We are <span className="text-calypso font-semibold">SaskDev</span> — happy to answer all your questions and help you get started.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
            />
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-calypso text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
