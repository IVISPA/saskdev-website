'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import mailAnimation from '@/lotties/mail.json';

interface Plan {
  id: string;
  title: string;
  description: string;
}

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
  selectedPlan: Plan | null;
}

export default function ContactModal({ show, onClose, selectedPlan }: ContactModalProps) {
  return (
    <AnimatePresence>
      {show && selectedPlan && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900/80 text-white rounded-2xl p-6 w-full max-w-md shadow-2xl border-2 border-purple-500/40 relative backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-xl text-white hover:text-calypso transition"
            >
              ✕
            </button>

            {/* Lottie animation */}
            <div className="flex justify-center mb-2">
              <Lottie animationData={mailAnimation} loop style={{ width: 160, height: 160 }} />
            </div>

            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold">
                Contact Us About <span className="text-calypso">{selectedPlan.title}</span>
              </h3>
              <p className="text-sm text-gray-300 mt-1">{selectedPlan.description}</p>
            </div>

            <form className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
              />
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-calypso"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-calypso text-white font-semibold py-2 rounded-lg transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              We usually reply within 24 hours 🚀
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
