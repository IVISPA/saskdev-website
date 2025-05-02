'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.play().catch(() => {
          video.muted = true;
          setMuted(true);
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (typeof window !== 'undefined') {
      const video = videoRef.current;
      if (video) {
        video.muted = !video.muted;
        setMuted(video.muted);
        video.play();
      }
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="text-purple-400">Sask</span>
            <span className="text-calypso">Dev</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Empowering your infrastructure,
            <br />
            from <span className="text-purple-400">code</span> to <span className="text-calypso">cloud</span>
          </h2>

          <p className="text-gray-300 text-lg mb-6">
            We build scalable, secure, and smart solutions for startups and businesses across Canada.
          </p>

          <a
            href="#services"
            className="inline-block bg-purple-600 hover:bg-calypso text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Right: Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-xl mx-auto"
        >
          <div className="p-[3px] rounded-3xl bg-gradient-to-br from-purple-500 to-calypso shadow-2xl bg-black">
            <div className="rounded-[22px] overflow-hidden bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                muted={muted}
                onClick={toggleMute}
                className="w-full h-auto bg-black cursor-pointer"
              >
                <source src="/videos/saskdev-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Botón de volumen */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full text-white backdrop-blur-md transition z-10"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
