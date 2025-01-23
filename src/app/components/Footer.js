'use client'  
  
import { Mail, Phone, MapPin, Globe } from 'lucide-react'  
  
const Footer = () => {  
  return (  
    <footer className="bg-gray-100 py-8 px-4 md:px-8">  
      <div className="max-w-7xl mx-auto">  
        <div className="mb-6">  
          <h2 className="text-2xl text-center font-semibold">AW Consulting</h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {/* Company Name */}  
          <div>  
            <h3 className="text-xl font-semibold mb-6 md:mb-0">Quick Links</h3>  
            {/* Terms and Conditions */}  
            <section className="mt-12">  
              <h2 className="text-xl font-semibold mb-4">Terms and Conditions of Use</h2>  
              <p className="text-gray-600 mb-4">Updated: January 2025</p>  
              <p className="text-gray-600 mb-4">  
                Welcome to AW (“we,” “us,” or “our”). By accessing or using our website at AWCONSULTINGSERVICE.COM (the “Site”), and the services we provide, you agree to be bound by these Terms and Conditions (“Terms”). Please read them carefully before using our services. If you do not agree to these Terms, you should not use our Site or services.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Services Provided</h3>  
              <p className="text-gray-600 mb-4">  
                AW offers professional consultancy services in the areas of Financial, Real Estate, Sustainability, Risk, Management, Marketing, Business and Construction. The specific terms and scope of services will be outlined in individual agreements with clients.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Acceptance of Terms</h3>  
              <p className="text-gray-600 mb-4">  
                By accessing or using this Site and engaging with our services, you accept and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated by reference. If you do not agree to these Terms, you must cease using the Site immediately.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Use of the Website</h3>  
              <p className="text-gray-600 mb-4">  
                You agree to use this Site only for lawful purposes and in accordance with these Terms. You are responsible for your own actions and any consequences that may arise from your use of the Site.  
              </p>  
              <span className="text-gray-600 mb-4">  
                You must not:  
                <ul className="list-disc pl-6">  
                  <li>Violate any applicable local, national, or international law.</li>  
                  <li>Use the Site in any manner that could damage, disable, overburden, or impair the Site’s functionality.</li>  
                  <li>Engage in any form of data scraping or unauthorized access of the Site's contents.</li>  
                </ul>  
              </span>  
              <h3 className="text-lg font-semibold mb-2">Consultancy Services</h3>  
              <p className="text-gray-600 mb-4">  
                The consultancy services provided by AW may include, but are not limited to, advisory services, project management, and other professional consulting work. The terms of any specific project or service engagement will be outlined in a separate agreement between you and AW Consulting Services.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">User Account & Responsibilities</h3>  
              <span className="text-gray-600 mb-4">  
                Some services on the Site may require you to create an account or provide personal information. You agree to:  
                <ul className="list-disc pl-6">  
                  <li>Provide accurate, current, and complete information as required for registration or contact forms.</li>  
                  <li>Maintain the confidentiality of your login credentials and account information.</li>  
                  <li>Be responsible for all activities under your account.</li>  
                </ul>  
              </span>  
              <h3 className="text-lg font-semibold mb-2">Payments and Fees</h3>  
              <p className="text-gray-600 mb-4">  
                For any paid services, you agree to pay all fees and charges associated with the services, as outlined in the respective service agreement. Payment terms, including billing cycles and any refund policies, will be communicated at the time of purchase or contract.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Intellectual Property</h3>  
              <p className="text-gray-600 mb-4">  
                All content on the Site, including but not limited to text, graphics, logos, images, and software, is owned by AW Consulting Services and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Site without our express written permission.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Disclaimer of Warranties</h3>  
              <p className="text-gray-600 mb-4">  
                AW provides the Site and its services “as is” and without any warranties, either express or implied. We do not warrant that the Site will be free from errors, viruses, or interruptions, or that the services will meet your expectations. You use the Site and services at your own risk.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>  
              <p className="text-gray-600 mb-4">  
                To the fullest extent permitted by law, AW shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, or data arising out of or in connection with your use of the Site or services, even if we have been advised of the possibility of such damages.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Indemnification</h3>  
              <p className="text-gray-600 mb-4">  
                You agree to indemnify, defend, and hold harmless to AW Consulting Services, its officers, employees, and agents, from and against any and all claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in connection with your use of the Site or services, violation of these Terms, or infringement of any intellectual property rights.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>  
              <p className="text-gray-600 mb-4">  
                Our Privacy Policy governs the collection and use of your personal data. By using our Site, you agree to the collection and use of your information as outlined in our Privacy Policy, which is incorporated by reference into these Terms.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Changes to Terms</h3>  
              <p className="text-gray-600 mb-4">  
                AW reserves the right to modify or amend these Terms at any time. Any changes will be posted on this page with an updated effective date. It is your responsibility to review these Terms periodically for any updates. Continued use of the Site after such changes constitutes your acceptance of the updated Terms.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Termination</h3>  
              <p className="text-gray-600 mb-4">  
                We may suspend or terminate your access to the Site or services at our discretion, without notice, if you breach these Terms or engage in unlawful or disruptive behavior.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Force Majeure</h3>  
              <p className="text-gray-600 mb-4">  
                AW shall not be liable for any failure or delay in performance under these Terms due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, strikes, or government actions.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Severability</h3>  
              <p className="text-gray-600 mb-4">  
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remainder of the Terms shall remain in full force and effect.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Entire Agreement</h3>  
              <p className="text-gray-600 mb-4">  
                These Terms, along with any other legal notices and agreements published by AW Consulting Services on the Site, constitute the entire agreement between you and AW concerning your use of the Site and services.  
              </p>  
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>  
              <p className="text-gray-600 mb-4">  
                If you have any questions or concerns regarding these Terms, please contact us at:  
                <br />  
                AW Consulting Services  
                <br />  
                [Your Address]  
                <br />  
                [Your Email Address]  
                <br />  
                (281) 715 - 0015  
              </p>  
            </section>  
          </div>  

  
          {/* Mobile View: Combined Labels and Info */}  
          <div className="block md:hidden space-y-6">  
            <div className="space-y-2">  
              <div className="flex items-center space-x-3">  
                <Mail className="w-5 h-5 text-gray-600" />  
                <p className="text-gray-600">Email</p>  
              </div>  
              <a   
                href="mailto:info@Awconsultingservice.com"   
                className="block pl-8 hover:text-blue-600 transition-colors"  
              >  
                Info@Awconsultingservice.com  
              </a>  
            </div>  
  
            <div className="space-y-2">  
              <div className="flex items-center space-x-3">  
                <Phone className="w-5 h-5 text-gray-600" />  
                <p className="text-gray-600">Phone number</p>  
              </div>  
              <a   
                href="tel:(281)715-0015"   
                className="block pl-8 hover:text-blue-600 transition-colors"  
              >  
                (281) 715 - 0015  
              </a>  
            </div>  
  
            <div className="space-y-2">  
              <div className="flex items-center space-x-3">  
                <MapPin className="w-5 h-5 text-gray-600" />  
                <p className="text-gray-600">Address</p>  
              </div>  
              <a   
                href="https://awconsultingservice.com"   
                target="_blank"   
                rel="noopener noreferrer"  
                className="block pl-8 hover:text-blue-600 transition-colors"  
              >  
                ...  
              </a>  
            </div>  
  
            <div className="space-y-2">  
              <div className="flex items-center space-x-3">  
                <Globe className="w-5 h-5 text-gray-600" />  
                <p className="text-gray-600">Website</p>  
              </div>  
              <a   
                href="https://awconsultingservice.com"   
                target="_blank"   
                rel="noopener noreferrer"  
                className="block pl-8 hover:text-blue-600 transition-colors"  
              >  
                Awconsultingservice.com  
              </a>  
            </div>  
          </div>  
  
          {/* Desktop View: Separate Labels and Info Columns */}  
          <div className="hidden md:block space-y-4">  
            <div className="flex items-center space-x-3">  
              <Mail className="w-5 h-5 text-gray-600" />  
              <p className="text-gray-600">Email</p>  
            </div>  
  
            <div className="flex items-center space-x-3">  
              <Phone className="w-5 h-5 text-gray-600" />  
              <p className="text-gray-600">Phone number</p>  
            </div>  
  
            <div className="flex items-center space-x-3">  
              <MapPin className="w-5 h-5 text-gray-600" />  
              <p className="text-gray-600">Address</p>  
            </div>  
  
            <div className="flex items-center space-x-3">  
              <Globe className="w-5 h-5 text-gray-600" />  
              <p className="text-gray-600">Website</p>  
            </div>  
          </div>  
  
          <div className="hidden md:block space-y-4">  
            <div>  
              <a   
                href="mailto:info@Awconsultingservice.com"   
                className="hover:text-blue-600 transition-colors"  
              >  
                Info@Awconsultingservice.com  
              </a>  
            </div>  
  
            <div>  
              <a   
                href="tel:(281)715-0015"   
                className="hover:text-blue-600 transition-colors"  
              >  
                (281) 715 - 0015  
              </a>  
            </div>  
  
            <div>  
              <span  
                className="hover:text-blue-600 transition-colors"  
              >  
                ...  
              </span>  
            </div>  
  
            <div>  
              <a   
                href="https://awconsultingservice.com"   
                target="_blank"   
                rel="noopener noreferrer"  
                className="hover:text-blue-600 transition-colors"  
              >  
                Awconsultingservice.com  
              </a>  
            </div>  
          </div>  
        </div>  
      </div>  
    </footer>  
  )  
}  
  
export default Footer  
