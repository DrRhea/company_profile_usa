'use client';
import Accordion from './components/Accordion';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {;
  return (
    <>

      <Navbar />

      <Hero  />

      <Accordion />
      <Contact />
    </>
  );
}