// src/components/Navbar.jsx
import React, { useState } from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2 shadow-lg shadow-blue-300/40 transition-all duration-300 bg-stone-300">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold text-white tracking-wide drop-shadow-md transform hover:scale-105 transition-transform duration-200 ${
            isDashboard ? 'mx-auto' : ''
          }`}
        >
          <img src={logo} alt="Logo" className="h-6" />
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-stone-300 md:relative md:w-auto md:flex md:items-center md:space-x-8`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105 md:inline"
          >
            Features
          </a>
          <a
            href="/dashboard"
            className="block px-4 py-2 text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105 md:inline"
          >
            Dashboard
          </a>
          <a
            href="/payment"
            className="block px-4 py-2 text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105 md:inline"
          >
            Pricing
          </a>
        </div>

        {/* Sign In / User button */}
        <div className="space-x-4">
          {isSignedIn ? (
            <UserButton
              userProfileMode="navigation"
              className="bg-white text-gray-800 px-4 py-2 text-xl rounded-full shadow-lg transform transition-transform duration-200 hover:shadow-2xl hover:scale-105"
            />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200 transform hover:shadow-2xl hover:scale-105">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
