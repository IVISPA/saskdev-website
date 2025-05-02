'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Lottie from 'lottie-react';
import codingAnimation from '@/lotties/coding.json';
import rocketAnimation from '@/lotties/rocket.json';
import cloudAnimation from '@/lotties/cloud.json';
import startupAnimation from '@/lotties/startup.json'; // ✅ Añadido

interface Service {
  id: string;
  title: string;
  desc: string;
  details: string;
}

interface Props {
  service: Service;
  onClose: () => void;
}

const animationMap: Record<string, any> = {
  custom: codingAnimation,
  devops: rocketAnimation,
  infra: cloudAnimation,
  startup: startupAnimation, // ✅ Mapeado correctamente
};

export default function ServiceModal({ service, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-gray-900 text-white rounded-2xl p-6 max-w-lg w-full border border-calypso shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            aria-label="Close modal"
          >
            <X />
          </button>

          {/* Animación */}
          <div className="flex justify-center mb-4">
            <Lottie
              animationData={animationMap[service.id]}
              loop
              style={{ width: 100, height: 100 }}
            />
          </div>

          {/* Título */}
          <h3 className="text-2xl font-bold text-calypso mb-2 text-center">
            {service.title}
          </h3>

          {/* Descripción breve */}
          <p className="text-gray-300 text-sm mb-3 text-center">
            {service.desc}
          </p>

          {/* Detalles extendidos */}
          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-left">
            {service.details}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="inline-block bg-purple-600 hover:bg-calypso text-white px-5 py-2 rounded-lg font-semibold transition text-center w-full"
          >
            Schedule a Call
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
