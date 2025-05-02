'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import ServiceModal from './ServiceModal';
import codingAnimation from '@/lotties/coding.json';
import rocketAnimation from '@/lotties/rocket.json';
import cloudAnimation from '@/lotties/cloud.json';
import startupAnimation from '@/lotties/startup.json';

const services = [
  {
    id: 'custom',
    animation: codingAnimation,
    title: 'Custom Software',
    desc: 'Web apps, APIs, automation, and microservices tailored to your business.',
    details:
      "Our team develops secure and scalable software solutions, including custom dashboards, third-party integrations, and internal tools optimized for growth.",
  },
  {
    id: 'devops',
    animation: rocketAnimation,
    title: 'DevOps & CI/CD',
    desc: 'Automated pipelines, testing, deployment strategies, and team enablement.',
    details:
      "We set up and maintain CI/CD pipelines, implement best practices for infrastructure as code, and ensure fast, safe deployments using tools like GitHub Actions, Docker, and more.",
  },
  {
    id: 'infra',
    animation: cloudAnimation,
    title: 'Infra & Hosting',
    desc: 'Secure Hetzner servers, Dokku setup, backups, monitoring, and SSL.',
    details:
      "From Hetzner server provisioning to Dokku configuration, we handle your app's lifecycle with backups, SSL, alerting, and high availability setups.",
  },
  {
    id: 'startup',
    animation: startupAnimation,
    title: 'Startup Solutions',
    desc: 'Affordable plans and mentoring to help startups launch fast and scale wisely.',
    details:
      "We empower early-stage startups with cost-effective development, scalable infra, and guided onboarding. Get your MVP live quickly with our tailored packages.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="bg-black py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          What We Do at{' '}
          <span>
            <span className="text-purple-400">Sask</span>
            <span className="text-calypso">Dev</span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(service)}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 cursor-pointer transition-all"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: '0px 0px 30px rgba(45, 212, 191, 0.3)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            >
              <div className="mb-4">
                <Lottie
                  animationData={service.animation}
                  loop
                  style={{ width: 100, height: 100, margin: '0 auto' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <ServiceModal
          service={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
