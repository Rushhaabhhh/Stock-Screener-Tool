import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-end mt-4"
    >
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="text-blue-500 hover:text-blue-600 mr-2 disabled:text-gray-400"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <span className="text-gray-700 mr-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="text-blue-500 hover:text-blue-600 ml-2 disabled:text-gray-400"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
};

export default Pagination;