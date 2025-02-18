import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        {/* Social Icons Circular Layout */}
        <div className="flex items-center justify-center space-x-6 relative group">
          {/* Instagram */}
          <a 
            href="https://instagram.com/pixelcraft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 
                     transform hover:scale-110 hover:shadow-lg"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm-5 15a5 5 0 110-10 5 5 0 010 10zm5-8a1 1 0 100-2 1 1 0 000 2z" 
              />
            </svg>
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com/pixelcraft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 
                     transform hover:scale-110 hover:shadow-lg -translate-y-4"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" 
              />
            </svg>
          </a>

          {/* YouTube */}
          <a 
            href="https://youtube.com/pixelcraft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 
                     transform hover:scale-110 hover:shadow-lg"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.98l5.75 3.04-5.75 3z" 
              />
            </svg>
          </a>
        </div>

        {/* Contact Statement */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-lg font-light italic">
            "Crafting digital excellence through pixels"
          </p>
          <p className="text-gray-300">
            For any queries: <a 
              href="mailto:pixelcraft@gmail.com" 
              className="text-gray-100 hover:text-gray-200 underline transition-colors"
            >
              pixelcraft@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 w-full pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} PixelCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;