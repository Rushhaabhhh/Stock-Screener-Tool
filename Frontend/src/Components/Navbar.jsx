import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-4 px-6 shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Cloud className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Stock Screener</h1>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;