import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3" id={'about-us'}>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-600 font-['arial']">About Us</h2>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:col-span-2">
              <h2 className="text-2xl sm:text-4xl text-gray-900 sm:col-span-2 w-3/4 sm:w-2/3">
                Who We Are: Redefining Success Together
              </h2>
              <p className="tracking-wider text-gray-600 font-['arial']">
                We are a consultancy firm offering specialized expertise in business strategy, risk advisory, financial planning, marketing strategy, estate planning and real estate consulting. Our services are designed to support both businesses and individuals in navigating complex challenges and seizing opportunities. 
              </p>
              <p className="tracking-wider text-gray-600 font-['arial']">
                Our process begins with a comprehensive understanding of each client’s objectives and challenges, followed by the development of a strategic framework tailored to their specific needs. We provide in-depth analysis, offer actionable insights, and collaborate to refine and enhance our approach. Throughout the execution phase, we work closely with our clients to ensure seamless integration of strategies. Focused on delivering sophisticated, high-level solutions, we equip our clients with the tools to make informed decisions and achieve sustained growth. What sets us apart is our commitment to a personalized approach. We don’t believe in a one-size-fits-all solution, which ensures that every strategy is customized to fit the unique needs of each client. Our transparent, results-driven process keeps you informed while also adapting to evolving needs. We understand that strategic planning is an on going process, not a one-time fix. Our expertise adjusts to meet changing markets and financial considerations, providing the guidance and perspective necessary for well-informed decision making.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-600 font-['arial']">process</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <h2 className="text-2xl sm:text-4xl text-gray-900 sm:col-span-2 w-3/4 sm:w-2/3">
                Our Consultation Process: What to Expect
              </h2>
              {[
                { title: "Initial Discovery call",
                  address: ["This is where we get to know you and your needs. We will discuss your goals, current challenges, and long-term vision, so we can fully understand your objectives. This step sets the foundation for everything we build together."] },
                { title: "Customized Strategy Development", 
                  address: ["Based on the insights from our discovery call, we will craft a tailored strategy designed to address your specific challenges and opportunities. Whether it is business growth, risk management, or financial planning, this is where we build a clear roadmap to success."] },
                { title: "Feedback & Revisions", 
                  address: ["Collaboration is key. We will present our proposed strategy, gather your input, and refine the plan to ensure it aligns with your vision. Your feedback ensures the final approach is practical, effective, and perfectly suited to your needs."] },
                { title: "Implementation & Guidance", 
                  address: ["Once the strategy is finalized, we will provide guidance on executing it seamlessly. Whether you need on going support, training, or advice, we are here to ensure every step leads to measurable success."] },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-gray-100 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900" style={{ fontFamily: 'Times New Roman' }}>{item.title}</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    {item.address.map((line, idx) => (
                      <p key={idx} className="font-['arial']">{line}</p>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3"  id={'services'}>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-600 font-['arial']">our services</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <h2 className="text-2xl sm:text-4xl text-gray-900 sm:col-span-2 w-3/4 sm:w-2/3">
                What We Offer: Services Tailored to You
              </h2>
              {[
                { title: "Business Strategy", 
                  address: ["Providing insights and recommendations to help businesses refine their goals, explore growth opportunities, and develop tailored strategies designed to enhance efficiency and competitive positioning."] },
                { title: "Marketing Strategy", 
                  address: ["Developing customized marketing plans that align with clients brand goals and target audiences, with a focus on enhancing brand visibility and customer engagement."] },
                { title: "Risk Advisory", 
                  address: ["Offering guidance to identify and assess potential risks, along with strategies that may help businesses navigate uncertainties and improve decision-making processes."] },
                { title: "Real Estate Consulting", 
                  address: ["Providing market research, property analysis, and tailored advice to support clients in making informed real estate decisions based on their unique goals."] },
                { title: "Financial Planning", 
                  address: ["Assisting clients in creating personalized financial approaches, including budgeting, cash flow management, and investment strategies, aimed at supporting long-term objectives."] },
                { title: "Sustainability Solutions", 
                  address: ["Providing tailored guidance to help businesses incorporate environmentally and socially responsible practices into their operations. This includes identifying opportunities to reduce environmental impact, improve resource efficiency, and align with evolving sustainability standards, all while supporting long-term business goals."] },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-gray-100 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900" style={{ fontFamily: 'Times New Roman' }}>{item.title}</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    {item.address.map((line, idx) => (
                      <p key={idx} className="font-['arial']">{line}</p>
                    ))}
                  </address>
                </div>
              ))}
              <div className="justify-self-center sm:col-span-2 mt-4">
                <Link href="/services" className="font-semibold leading-6 text-white bg-gray-900 py-3 px-6 col-span-2 text-center rounded-md">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
