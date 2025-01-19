'use client';

import { useState } from 'react';

const Accordion = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How can AAHM Consultations help my business grow?",
      answer: "AAHM Consultations helps businesses grow by offering  strategic insights and practical solutions in your dedicated area working closely with you to create actionable plans that align with your goals.",
    },
    {
      question: "What makes AAHM  Consultations different from  other consulting firms?",
      answer: "Our dedication to client success  and 15 years of experience set us apart. We  pride ourselves on offering  personalized, actionable advice  and a hands-on approach.  Additionally, we provide on going  support to ensure our strategies  deliver consistent, measurable  results for your business.",
    },
    {
        question: "Does AAHM Consultations  offer services for startups or  small businesses?",
        answer: "Yes, we understand the unique  challenges startups and small  businesses face. AAHM  provides tailored solutions to  help you build a strong  foundation. Whether you’re just  starting or ready to scale, we’re  here to support you every step of  the way.",
    },
    {
        question: "How are project budgets managed?",
        answer: "We work transparently with clients to establish and manage project budgets effectively. Payment structures are discussed during the initial consultation and are typically based on project milestones to ensure a smooth and organized financial process.",
    }
  ];

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {/* Sebelah kiri: Judul */}
          <div>
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300">
              Got questions? We’ve got answers. Browse through the most common queries to find the information you need.
            </p>
          </div>

          {/* Sebelah kanan: Daftar FAQ */}
          <div>
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
                      <span className="text-base font-semibold leading-7">
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
                  {openFAQ === index && (
                    <dd className="mt-2 pr-12" id={`faq-${index}`}>
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </dd>
                  )}
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
