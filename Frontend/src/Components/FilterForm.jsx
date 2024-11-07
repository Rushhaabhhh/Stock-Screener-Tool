import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const FilterForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParam = new URLSearchParams({ query }).toString();
    navigate(`?${queryParam}`);  // Navigate to the same page with updated query params
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block font-medium mb-2">Create a Search Query</label>
          <textarea
            id="query"
            name="query"
            value={query}
            onChange={handleInputChange}
            className="w-full h-24 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Market capitalization > 500 AND P/E Ratio < 15 AND ROE > 22"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Run This Query
        </button>
      </form>
    </motion.div>
  );
};

export default FilterForm;
