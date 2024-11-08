import React from 'react';
import {Router, Routes, Route} from 'react-router-dom';

import StockScrenner from './Pages/StockScreener';
import Guide from './Pages/Guide';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<StockScrenner />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
    </Router>

  );
}

export default App;