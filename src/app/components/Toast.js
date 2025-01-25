import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Toast = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    default: 'bg-blue-500'
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
      <div className={`${typeStyles[type] || typeStyles.default} text-white p-4 rounded-lg shadow-lg flex items-center justify-between animate-slide-in`}>
        <span className="mr-4">{message}</span>
        <button 
          onClick={() => {
            setIsVisible(false);
            onClose();
          }} 
          className="hover:bg-opacity-75 rounded-full p-1"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toast;