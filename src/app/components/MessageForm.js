'use client';

import { MessageCircle, Pointer, SendHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Toast from './Toast'; 

const COUNTRY_CODES = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴' },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷' },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰' },
  { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪' },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴' },
  { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: '🇰🇿' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { code: 'RO', name: 'Romania', dialCode: '+40', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'SK', name: 'Slovakia', dialCode: '+421', flag: '🇸🇰' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'TW', name: 'Taiwan', dialCode: '+886', flag: '🇹🇼' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' }
];

export default function MessageForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    message: ''
  });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceId = 'service_ioud27e';
    const templateId = 'template_s9ipl29';
    const publicKey = '0CnncUta2LfVxAwru';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, {
      name: formData.name,
      phoneNumber: `${selectedCountry.dialCode} ${formData.phoneNumber}`,
      message: formData.message
    }, publicKey)
    .then((response) => {
      setToast({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon.'
      });
      // Reset form after submission
      setFormData({
        name: '',
        phoneNumber: '',
        message: ''
      });
      setIsFormVisible(false);
    })
    .catch((error) => {
      setToast({
        type: 'error', 
        message: 'We apologize, but there was an error processing your submission. Please try again later.'
      });
    });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-10 bg-gray-900 p-4 rounded-full text-white cursor-pointer shadow-gray-800 shadow-sm flex items-center justify-center hover:scale-90 duration-150"
        onClick={() => setIsFormVisible(true)}
      >
        <MessageCircle />
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 ">
            {/* Header Section */}
            <div className="bg-gray-900 text-white rounded-t-lg p-4 flex items-center space-x-3 justify-between">
              <h2 className="text-lg font-medium font-['arial']">Have a question?</h2>
              <button
                onClick={() => setIsFormVisible(false)}
                className="ml-auto text-white text-lg hover:text-gray-300"
              >
                <X />
              </button>
            </div>

            {/* Description Section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-start space-x-3">
                <p className="text-gray-700 text-sm font-['arial']">
                  Enter your question below and a representative will get right back to you.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full font-['arial'] p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              
              {/* Country Code Dropdown */}
              <div className="flex items-center space-x-2 relative">
                <div 
                  className="w-14 h-10 bg-gray-200 flex items-center justify-center rounded-md cursor-pointer"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                >
                  <span>{selectedCountry.flag}</span>
                </div>
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 max-h-48 overflow-y-auto bg-white border rounded-md shadow-lg z-10">
                    {COUNTRY_CODES.map((country) => (
                      <div 
                        key={country.code}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsCountryDropdownOpen(false);
                        }}
                      >
                        <span className="mr-2">{country.flag}</span>
                        <span className="mr-2">{country.name}</span>
                        <span className="text-gray-500">{country.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full font-['arial'] p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full font-['arial'] p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                rows="4"
              ></textarea>

              {/* Terms and Submit Section */}
              <p className="text-xs text-gray-500 font-['arial']">
                By submitting you agree to receive SMS from AW Consulting. Message & data rates may apply.
              </p>
              <button
                type="submit"
                className="mx-auto bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 flex gap-2 items-center justify-center"
              >
                Send <SendHorizontal className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <Toast 
          type={toast.type} 
          message={toast.message} 
          onClose={handleCloseToast} 
        />
      )}
    </>
  );
}