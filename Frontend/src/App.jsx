import React from 'react';
import {Routes, Route} from 'react-router-dom';

import StockScrenner from './Pages/StockScreener';
import Guide from './Pages/Guide';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<StockScrenner />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>

  );
}

export default App;