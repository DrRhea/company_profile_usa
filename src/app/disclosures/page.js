import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Disclosures = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-100 mt-40 rounded-md mb-8 md:mt-32">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Disclosures</h1>
        <section className="space-y-8">
          <div>
            <p className="text-gray-700 mb-4">  
            Visitors to the AW Consulting website acknowledge that different investments involve varying degrees of risk. No client or prospective client should assume that any information presented and/or made available on this website serves as the receipt of, or substitutes for, personalized advice from AW Consulting or any other professional cited on this website.
            </p>  
          </div>  

          <div>
            <p className="text-gray-700 mb-4">  
              Past performance may not be indicative of future results. Therefore, no current or prospective client should assume that the future performance of any specific investment, investment strategy (including those recommended or purchased by the advisor), or product referenced directly or indirectly on this website, or via links to unaffiliated third-party websites, will be profitable or match the indicated performance levels.
            </p>  
          </div>  

          <div>
            <p className="text-gray-700 mb-4">  
              AW Consulting is not a law firm or a Certified Public Accountant. AW Consulting does not provide legal or tax services and does not offer legal or accounting advice. Prior to making any tax or legal decisions, please consult with the appropriate legal or tax professionals for advice. AW Consulting is not engaged in rendering legal or accounting services. If legal or tax advice is required, the services of a competent professional should be sought.
            </p>  
          </div>  
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Disclosures