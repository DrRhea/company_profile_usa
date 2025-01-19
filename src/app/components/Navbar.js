'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll'; // Import react-scroll

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State for fixed navbar
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  // Handle scroll event to toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true); // Set navbar to fixed when scrolling down
      } else {
        setIsFixed(false); // Reset to original position when at top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isFixed ? 'fixed top-0 left-0 w-full' : 'absolute inset-x-0 top-0'
      } z-50 transition-all`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/placeholder-logo.png"
              width={32}
              height={32}
              alt="Company Logo"
            />
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end space-x-4 relative z-20"> {/* Set higher z-index here */}
          <Link 
            to="contact"
            smooth={true}
            duration={500}
            className="font-semibold leading-6 text-white bg-gray-900 px-6 py-3 relative z-20 cursor-pointer">
            Work With Us
          </Link>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={` ${isFixed ? 'text-white' : 'text-gray-900'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              top: isFixed ? '0' : '0', // Add top margin when fixed to avoid overlap
            }}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/placeholder-logo.png"
                  width={32}
                  height={32}
                  alt="Company Logo"
                />
              </a>
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
                    to="home" // Ganti dengan ID yang sesuai
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="about-us"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="process"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Process
                  </Link>
                  <Link
                    to="faqs"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
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
  );
}
