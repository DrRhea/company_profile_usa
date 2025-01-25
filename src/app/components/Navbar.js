'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Tambahkan state untuk mendeteksi mobile
  
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  // Handle fixed navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Deteksi layar mobile (<= 1000px)
    };

    handleResize(); // Set state saat komponen pertama kali dimuat
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fungsi untuk menentukan offset berdasarkan mode
  const calculateOffset = (baseOffset) => {
    return isMobile ? baseOffset - 35 : baseOffset; // Kurangi 20 jika di mobile
  };

  return (
    <>
      <header
        className={`${
          isFixed ? 'fixed top-0 left-0 w-full bg-gray-900' : 'absolute inset-x-0 top-0'
        } z-50 transition-all`}
      >
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="-m-1.5 p-1.5 flex items-center gap-x-3">
              <span className="sr-only">CONSULTING SERVICES</span>
              <img src='/images/logo.png'
                className={`${
                  isFixed ? 'bg-white p-1 rounded' : ''
                } h-12 w-auto`}/>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="contact"
              smooth={true}
              duration={500}
              offset={calculateOffset(-100)}
              className={`${
                isFixed ? 'border border-white' : 'border border-gray-900'
              } hidden md:block font-semibold leading-6 bg-gray-900 text-white px-6 py-3 relative z-20 cursor-pointer`}
            >
              Work With Us
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isFixed ? 'text-white' : 'text-gray-900'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="md:hidden">
          <Link 
            to="contact"
            smooth={true}
            duration={500}
            offset={calculateOffset(-100)}
            className={`${
              isFixed ? 'border border-white bg-gray-900' : 'border border-gray-900 bg-gray-900'
            } block w-full text-center font-semibold leading-6 text-white px-4 py-2 cursor-pointer`}
          >
            Work With Us
          </Link>
        </div>

        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                top: isFixed ? '0' : '0',
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <img 
                    src='/images/logo.png'
                    className="h-12 w-auto" 
                    alt="CONSULTING SERVICES"
                  />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-130)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to="about-us"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-150)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      to="services"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-90)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-100)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="resources"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-100)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      to="faqs"
                      smooth={true}
                      duration={500}
                      offset={calculateOffset(-95)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </header>
    </>
  );
}