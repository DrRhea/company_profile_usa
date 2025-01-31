'use client'  
  
import { Mail, Phone, MapPin, Globe } from 'lucide-react'  
import '../font-style.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
  
const Footer = () => {  
  const router = useRouter();
  const pathname = usePathname();

  // Handle contact link click
  const handleContactClick = (e) => {
    e.preventDefault();
    
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        // Calculate offset based on viewport width
        const offset = window.innerWidth <= 1000 ? -135 : -100;
        
        // Calculate scroll position with offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // If on a different page, redirect to home first
    if (pathname !== '/') {
      router.push('/');
      setTimeout(scrollToContact, 300);
    } else {
      scrollToContact();
    }
  };

  return (  
    <footer className="bg-gray-100 py-8 px-4 md:px-8">  
      <div className="max-w-7xl mx-auto">  
        <div className="mb-6">  
          <h2 className="text-2xl text-center font-semibold">AW Consulting</h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <div>  
            <h3 className="text-xl font-semibold mb-6 md:mb-0">Quick Links</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <Link 
                href="/terms-and-conditions" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms and Conditions
              </Link>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Link 
                href="/disclosures" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Disclosures
              </Link>
            </div>
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
                className="block pl-8"  
              >  
                1445 North Loop West, Houston, TX 77008  
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
                className=""  
              >  
                1445 North Loop West, Houston, TX 77008  
              </span>  
            </div>  
          </div>  
        </div>  
      </div>  
    </footer>  
  )  
}  
  
export default Footer  
