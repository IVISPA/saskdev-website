'use client';

import dynamic from 'next/dynamic';

// Dynamically import all components
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const ClientWrapper = dynamic(() => import('@/components/ClientWrapper'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientWrapper />
      <Contact />
    </main>
  );
}
