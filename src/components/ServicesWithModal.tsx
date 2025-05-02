'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Services from './Services';

const serviceDetails = {
  software: {
    title: 'Custom Software',
    description:
      'We design scalable web apps, APIs, and internal tools tailored to your business logic. From MVPs to complex systems.',
    bullets: [
      'Scalable React/Next.js apps',
      'REST/GraphQL APIs with security layers',
      'Microservice-oriented architecture',
      'CI/CD integration from day one',
    ],
  },
  devops: {
    title: 'DevOps & CI/CD',
    description:
      'We automate deployments, testing, and team workflows using the best DevOps practices.',
    bullets: [
      'CI/CD pipelines (GitHub Actions, GitLab)',
      'Canary, Blue/Green, and Rolling strategies',
      'Internal training and onboarding',
      'Secrets management and SAST scans',
    ],
  },
  infra: {
    title: 'Infrastructure & Hosting',
    description:
      'Secure, reliable, and cost-effective hosting using Hetzner and lightweight tools like Dokku.',
    bullets: [
      'Hetzner VPS pre-configured',
      'Dokku with multiple app support',
      'Backups, monitoring, and firewall setup',
      'SSL & database provisioning in minutes',
    ],
  },
};

export default function ServicesWithModal() {
  const [selected, setSelected] = useState<null | keyof typeof serviceDetails>(null);

  const closeModal = () => setSelected(null);

  return (
    <div>
      <Services onCardClick={setSelected} />

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-2xl p-8 max-w-lg w-full border border-purple-500 shadow-xl relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {serviceDetails[selected].title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {serviceDetails[selected].description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                {serviceDetails[selected].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
