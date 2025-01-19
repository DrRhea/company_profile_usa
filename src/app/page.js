'use client';
import Accordion from './components/Accordion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

export default function Home() {;
  return (
    <>
      <Navbar />
      <Hero  />
      <About  />
      <Accordion />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
}