import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-500 text-white py-4 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stock Screener</h1>
          <a
            href="https://github.com/your-username/stock-screener"
            className="text-white hover:text-gray-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;