import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    const serviceId = 'service_2o5o1al';
    const templateId = 'template_7n1odlg';
    const publicKey = 'k0geX8asSkGYyPyd_';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
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
        email: '',
        phoneNumber: '',
        message: ''
      });
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
      {toast && (
        <Toast 
          type={toast.type} 
          message={toast.message} 
          onClose={handleCloseToast} 
        />
      )}
      <div className="relative isolate bg-white" id={'contact'}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-4 pt-12 sm:pt-16 lg:static lg:px-8 lg:py-16">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="mb-6 text-sm uppercase tracking-widest font-['arial'] text-gray-600">Get in touch</h2>
              <h2 className="text-6xl font-medium tracking-tight text-gray-900">Your visions, our solutions</h2>
              <p className="mt-2 text-lg leading-8 tracking-wider text-gray-700 font-['arial']">
                Schedule your consultation and find out how we can help you.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="px-6 pb-12 pt-4 sm:pb-16 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className='sm:col-span-2'>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900 font-['arial']"
                  >
                    Name <span className='text-gray-400 font-normal font-["arial"] text-xs'>(required)</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900 font-['arial']"
                  >
                    Email <span className='text-gray-400 font-normal font-["arial"] text-xs'>(required)</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900 font-['arial']"
                  >
                    Phone number <span className='text-gray-400 font-normal font-["arial"] text-xs'>(required)</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phone-number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <span className='text-gray-400 font-normal font-["arial"] text-xs select-none'>
                      By entering your number you agree to receive text messages from AW Consulting. Reply STOP to unsubscribe. Message & data rates may apply.
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900 font-['arial']"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-full"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;