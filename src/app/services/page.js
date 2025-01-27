import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="py-16 mt-12 md:mt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3"  id={'services'}>
              <div>
                <h2 className="text-sm uppercase tracking-widest text-gray-600 font-['arial']">our services</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <h2 className="text-4xl text-gray-900 sm:col-span-2 w-2/3">
                  What We Offer: Services Tailored to You
                </h2>
                {[
                  { title: "Business Strategy", 
                    address: ["Providing insights and recommendations to help businesses refine their goals, explore growth opportunities, and develop tailored strategies designed to enhance efficiency and competitive positioning."] },
                  { title: "Marketing Strategy", 
                    address: ["Developing customized marketing plans that align with clients’ brand goals and target audiences, with a focus on enhancing brand visibility and customer engagement."] },
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services