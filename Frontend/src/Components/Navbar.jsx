import React from 'react';
import { motion } from 'framer-motion';
import { Search, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-500 py-2 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 text-md">
        <div className="flex items-center justify-between">
          <img
            src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
            alt="Logo"
            className="h-6"
          />

          <div className="flex items-center space-x-8 font-medium">
            <a href="#">
              FEED
            </a>
            <a href="#">
              SCREENS
            </a>
            <div className="relative group">
              <a href="#">
                TOOLS
                <ChevronDown className="inline-block -mt-1 ml-2" size={16} />
              </a>
              <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg p-2 rounded-md w-32">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tool 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tool 2</a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-1.5 w-96">
            <Search className="text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search for a company"
              className="w-full bg-transparent text-md focus:outline-none placeholder-gray-500"
            />
          </div>

          <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-1.5 cursor-pointer">
            <User className="text-blue-900" size={16} />
            <span className="text-md text-gray-900">PROFILE</span>
            <ChevronDown className="text-gray-900" size={16} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
