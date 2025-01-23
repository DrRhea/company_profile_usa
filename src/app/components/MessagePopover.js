"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

export default function MessagePopover() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-14 bg-white text-gray-900 p-4 rounded-lg shadow-lg flex items-center space-x-3">
        <img
          src="/images/smiley.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold font-['arial'] tracking-wide">Hi there, have a question?</p>
          <p className="font-['arial'] tracking-wider">Text us here.</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
      </div>
    )
  );
}
