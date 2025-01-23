'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How can AW Consulting help my business grow?",
      answer: "AW Consulting helps businesses grow by offering strategic insights and practical solutions in your dedicated area working closely with you to create actionable plans that align with your goals.",
    },
    {
      question: "What makes AW Consulting different from other consulting firms?",
      answer: "Our dedication to client success and 15 years of experience set us apart. We pride ourselves on offering personalized, actionable advice and a hands-on approach. Additionally, we provide ongoing support to ensure our strategies deliver consistent, measurable results for your business.",
    },
    {
      question: "Does AW Consulting offer services for startups or small businesses?",
      answer: "Yes, we understand the unique challenges startups and small businesses face. AAHM provides tailored solutions to help you build a strong foundation. Whether you’re just starting or ready to scale, we’re here to support you every step of the way.",
    },
    {
      question: "How are project budgets managed?",
      answer: "We work transparently with clients to establish and manage project budgets effectively. Payment structures are discussed during the initial consultation and are typically based on project milestones to ensure a smooth and organized financial process.",
    },
  ];

  return (
    <div className="bg-gray-900" id="faqs"> {/* Tambahkan ID di sini */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
          <div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-10 tracking-tight text-white">
              FAQs
            </h2>
          </div>
          <div className='col-span-2'>
            <dl className="space-y-6 divide-y divide-white/10">
              {faqs.map((faq, index) => (
                <div className="pt-6" key={index}>
                  <dt>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between text-left text-white"
                      aria-controls={`faq-${index}`}
                      aria-expanded={openFAQ === index}
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-base tracking-wider leading-7 font-['arial']">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {openFAQ === index ? (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                          </svg>
                        ) : (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
                  <motion.div
                    key={`content-${index}`}
                    initial={false}
                    animate={{ height: openFAQ === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <dd className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300 font-['arial']">{faq.answer}</p>
                    </dd>
                  </motion.div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
