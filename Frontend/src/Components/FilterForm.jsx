import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FilterForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [filterByDate, setFilterByDate] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCheckboxChange = () => {
    setFilterByDate(!filterByDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);  // Pass the query value to the parent component's onSubmit handler
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <div className="flex space-x-6">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="query" className="block text-xl font-medium mb-2">Create a Search Query</label>
            <textarea
              id="query"
              name="query"
              value={query}
              onChange={handleInputChange}
              className="w-full h-24 px-4 py-2 rounded-md border-2 border-gray-300"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="filterByDate"
                checked={filterByDate}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="filterByDate" className="text-gray-700">
                Only companies with Sep 2024 results
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Run This Query
            </button>
          </form>
        </div>
        
        {/* Custom query example */}
        <div className="flex-1 p-4 border rounded-md bg-blue-50 border-blue-300 max-w-s">
          <p className="text-2xl pb-2">Custom query example</p>
          <p className="text-lg">Market capitalization &gt; 500 AND Price to earning &lt; 15 AND Return on capital employed &gt; 22%</p>
          <a href="#" className="text-blue-500 text-sm">Detailed guide on creating screens</a>
        </div>

      </div>
    </motion.div>
  );
};

export default FilterForm;
