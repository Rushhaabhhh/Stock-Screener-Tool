import React from 'react';
import {Routes, Route} from 'react-router-dom';

import StockScrenner from './Pages/StockScreener';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StockScrenner />} />
    </Routes>

  );
}

export default App;