import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, FlaskConicalIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Papa from 'papaparse';
import Navbar from '../Components/Navbar';

const PARAMETERS = [
  { id: 'Market Capitalization', label: 'Market Capitalization', unit: ' B' },
  { id: 'P/E Ratio', label: 'P/E Ratio', unit: '' },
  { id: 'ROE', label: 'ROE', unit: ' %' },
  { id: 'Debt/Equity Ratio', label: 'Debt-to-Equity Ratio', unit: '' },
  { id: 'Dividend Yield', label: 'Dividend Yield', unit: ' %' },
  { id: 'Revenue Growth', label: 'Revenue Growth', unit: ' %' },
  { id: 'EPS Growth', label: 'EPS Growth', unit: ' %' },
  { id: 'Current Ratio', label: 'Current Ratio', unit: '' },
  { id: 'Gross Margin', label: 'Gross Margin', unit: ' %' }
];

const StockScreener = () => {
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [filterByDate, setFilterByDate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://raw.githubusercontent.com/Rushhaabhhh/Stock-Screener-Tool/refs/heads/main/StockDataset.csv');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const cleanedData = results.data.map(row => ({
            'Stock Name': row['Ticker'],
            'Market Capitalization': parseFloat(row['Market Capitalization (B)']) || 0,
            'P/E Ratio': parseFloat(row['P/E Ratio']) || 0,
            'ROE': parseFloat(row['ROE (%)']) || 0,
            'Debt/Equity Ratio': parseFloat(row['Debt-to-Equity Ratio']) || 0,
            'Dividend Yield': parseFloat(row['Dividend Yield (%)']) || 0,
            'Revenue Growth': parseFloat(row['Revenue Growth (%)']) || 0,
            'EPS Growth': parseFloat(row['EPS Growth (%)']) || 0,
            'Current Ratio': parseFloat(row['Current Ratio']) || 0,
            'Gross Margin': parseFloat(row['Gross Margin (%)']) || 0
          }));
          
          setStocks(cleanedData);
          setFilteredStocks(cleanedData);
          setLoading(false);
        },
        error: (error) => {
          setError('Error parsing CSV data: ' + error.message);
          setLoading(false);
        }
      });
    } catch (err) {
      setError('Error fetching data: ' + err.message);
      setLoading(false);
    }
  };

  const parseQuery = (queryString) => {
    const conditions = queryString.split('AND').map(condition => condition.trim());
    return conditions.map(condition => {
      const parts = condition.match(/([^<>=]+)\s*([<>=])\s*(\d+)/);
      if (!parts) return null;
      return {
        parameter: parts[1].trim(),
        operator: parts[2],
        value: parseFloat(parts[3])
      };
    }).filter(condition => condition !== null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setFilteredStocks(stocks);
      return;
    }

    const conditions = parseQuery(query);
    let filtered = stocks.filter(stock => {
      return conditions.every(condition => {
        const stockValue = stock[condition.parameter];
        
        switch (condition.operator) {
          case '>':
            return stockValue > condition.value;
          case '<':
            return stockValue < condition.value;
          case '=':
            return Math.abs(stockValue - condition.value) < 0.0001;
          default:
            return true;
        }
      });
    });

    // Apply date filter if checked
    if (filterByDate) {
      filtered = filtered.filter(stock => stock.hasResults2024);
    }

    setFilteredStocks(filtered);
    setCurrentPage(1);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCheckboxChange = () => {
    setFilterByDate(!filterByDate);
  };

  // Pagination calculations
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = filteredStocks.slice(indexOfFirstStock, indexOfLastStock);
  const totalPages = Math.ceil(filteredStocks.length / stocksPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-center">
          <h2 className="text-xl font-semibold mb-2">Error Loading Data</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
        <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Create a Search Query</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 text-md">
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1">
                    Query
                  </label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-0.8 focus:ring-blue-600 focus:border-blue-600 outline-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="dateFilter"
                    checked={filterByDate}
                    onChange={() => setFilterByDate(!filterByDate)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <label htmlFor="dateFilter" className="text-sm text-gray-600">
                    Only companies with Sep 2024 results
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Play className="mr-2" size={16} />
                  RUN THIS QUERY
                </button>
              </form>
            </div>

            <div className="flex flex-col items-start bg-blue-50 p-6 rounded-lg border border-blue-100 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Custom query example</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Market Capitalization &gt; 300 AND<br />
                  P/E Ratio &lt; 15 AND<br />
                  ROE &gt; 22
                </p>
                <a href="/" className="text-blue-600 hover:text-blue-700 hover:underline text-md">
                  Detailed guide on creating screens
                </a>
              </div>

              <button className="flex items-center px-4 py-2 border border-gray-600 rounded-md text-gray-600 hover:text-blue-700">
                <FlaskConicalIcon size={24} className="mr-2" />
                  SHOW ALL RATIOS
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Name
                  </th>
                  {PARAMETERS.map((param) => (
                    <th
                      key={param.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {param.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentStocks.map((stock, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {stock['Stock Name']}
                    </td>
                    {PARAMETERS.map((param) => (
                      <td key={param.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {typeof stock[param.id] === 'number' 
                          ? stock[param.id].toFixed(2) + param.unit 
                          : stock[param.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StockScreener;