'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';

const plans = [
  {
    id: 'starter',
    title: 'SaaS Starter',
    description: 'A complete solution to launch your SaaS with hosting, CI/CD and security.',
    features: [
      'Custom app included',
      'Hosting setup',
      'CI/CD pipelines from day one',
      'Basic security integrated',
    ],
  },
  {
    id: 'infra',
    title: 'Infra Total',
    description: 'Everything you need to host and scale your apps on dedicated servers.',
    features: [
      'Hetzner server provisioning',
      'Automatic backups',
      'Monitoring & support',
      'Dokku deployment setup',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps Enablement',
    description: 'We set up your pipelines and train your team for scalable delivery.',
    features: [
      'Complete CI/CD setup',
      'Team training included',
      'Best DevOps practices',
      'Automated test integration',
    ],
  },
  {
    id: 'startup',
    title: 'Startup Launchpad',
    description: 'Launch your MVP faster with the support and tools startups really need.',
    features: [
      'MVP-ready app setup',
      '1:1 technical mentoring for founders',
      'Infrastructure + CI/CD included',
      '3 months support at startup pricing',
    ],
  },
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('starter');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const planObject = plans.find((p) => p.id === selectedPlan);

  return (
    <section id="plans" className="bg-gray-900 py-20 px-4 text-white relative z-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Choose <span className="text-purple-400">Your</span>{' '}
          <span className="text-calypso">Plan</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl p-6 border shadow-lg transition-all min-h-[460px] ${
                  isSelected
                    ? 'bg-purple-700/10 border-purple-500'
                    : 'bg-gray-800 border-gray-700'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`mt-6 w-full rounded-lg px-5 py-2 font-semibold transition ${
                    isSelected
                      ? 'bg-purple-500 hover:bg-calypso text-white'
                      : 'bg-calypso hover:bg-calypso/80 text-white'
                  }`}
                >
                  Contact Us
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ContactModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={planObject}
      />
    </section>
  );
}
