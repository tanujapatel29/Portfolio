import React, { useState, useEffect } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <a href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-purple-500 dark:text-gray-100">
                <span>
                  <img
                    alt="N"
                    loading="lazy"
                    width="32"
                    height="32"
                    className="w-16"
                    
                    src="./img/logo.jpg" />

                  
                </span>
                <span>Tanuja Patel</span>
              </span>
            </a>
            {/* Hamburger Icon for Mobile */}
            <button
              className="block lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu - Always Visible on Large Screens */}
          <div className="hidden lg:flex items-center space-x-6 text-center">
            <ul className="lg:flex items-center space-x-6">
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#service"
                >
                  Service
                </a>
              </li>
             
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex space-x-4 items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-500 rounded-full focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
              </svg>
            </button>
            <a className="px-6 py-2 text-white bg-purple-600 rounded-md" href="https://github.com">
              Download
            </a>
          </div>
        </nav>

        {/* Mobile Menu - Only visible when 'isOpen' is true */}
        {isOpen && (
          <div className="lg:hidden">
            <ul className="space-y-6 text-center py-6">
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#service"
                >
                  Service
                </a>
              </li>
              
              <li>
                <a
                  className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-purple-500"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
