'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl text-center font-semibold">Quick Links</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Name */}
          <div>
            <h3 className="text-xl font-semibold mb-6 md:mb-0">AW Consulting</h3>
          </div>

          {/* Mobile View: Combined Labels and Info */}
          <div className="block md:hidden space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <p className="text-gray-600">Email</p>
              </div>
              <a 
                href="mailto:Awhmconsulting@gmail.com" 
                className="block pl-8 hover:text-blue-600 transition-colors"
              >
                Awconsultingservice.com
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
          </div>

          <div className="hidden md:block space-y-4">
            <div>
              <a 
                href="mailto:Awhmconsulting@gmail.com" 
                className="hover:text-blue-600 transition-colors"
              >
                Awhmconsulting@gmail.com
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