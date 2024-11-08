import React from 'react';
import StockScrenner from './Pages/StockScreener';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<StockScrenner />} />
    </Routes>

  );
}

export default App;