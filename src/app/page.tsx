import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
    </main>
  );
}
