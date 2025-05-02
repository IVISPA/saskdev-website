'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with Lottie animations
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Plans = dynamic(() => import('@/components/Plans'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });

export default function ClientWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Services />
      <Plans />
    </Suspense>
  );
} 