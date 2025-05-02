'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import aboutAnimation from '@/lotties/aboutus.json';

export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Lottie animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient blur halo */}
          <div className="absolute -top-20 -left-10 w-[300px] h-[300px] bg-calypso/20 rounded-full blur-3xl z-[-1]" />
          <Lottie
            animationData={aboutAnimation}
            loop
            style={{ maxWidth: 400, margin: '0 auto' }}
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center md:text-left">
            About <span className="text-purple-400">Us</span>
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            At <span className="text-calypso font-medium">SaskDev</span>, we empower businesses through
            custom software, DevOps automation, and infrastructure-as-code. We&#39;re dedicated to building
            scalable, secure, and elegant solutions — from concept to deployment.
          </p>
          <p className="text-gray-400 text-base">
            Our team combines technical excellence with real-world experience, helping startups and
            companies scale faster, reduce costs, and adopt modern engineering culture — with a smile 😄
          </p>
        </motion.div>
      </div>
    </section>
  );
}
