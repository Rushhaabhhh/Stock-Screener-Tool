import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import StockTable from '../Components/StockTable';
import FilterForm from '../Components/FilterForm';
import Pagination from '../Components/Pagination';
import { applyFilters, fetchStockData } from '../utils/api';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [stocks, setStocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      try {
        const stockData = await fetchStockData();
        const query = searchParams.get('query') || '';
        const filteredStocks = applyFilters(query, stockData);
        setStocks(filteredStocks);
        setTotalPages(Math.ceil(filteredStocks.length / 10));
      } catch (error) {
        console.error('Error fetching stocks:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStocks();
  }, [searchParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      <Navbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <FilterForm />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <StockTable stocks={stocks.slice((currentPage - 1) * 10, currentPage * 10)} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
