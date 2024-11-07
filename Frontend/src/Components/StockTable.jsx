import React from 'react';

const StockTable = ({ stocks }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      {stocks.length > 0 ? (
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Market Capitalization</th>
            <th className="px-4 py-2 text-left">P/E Ratio</th>
            <th className="px-4 py-2 text-left">ROE (%)</th>
            <th className="px-4 py-2 text-left">Debt-to-Equity</th>
            <th className="px-4 py-2 text-left">Dividend Yield (%)</th>
            <th className="px-4 py-2 text-left">Revenue Growth (%)</th>
            <th className="px-4 py-2 text-left">EPS Growth (%)</th>
            <th className="px-4 py-2 text-left">Current Ratio</th>
            <th className="px-4 py-2 text-left">Gross Margin (%)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{stock['Market Capitalization (B)']}</td>
              <td className="px-4 py-2">{stock['P/E Ratio']}</td>
              <td className="px-4 py-2">{stock['ROE (%)']}</td>
              <td className="px-4 py-2">{stock['Debt-to-Equity Ratio']}</td>
              <td className="px-4 py-2">{stock['Dividend Yield (%)']}</td>
              <td className="px-4 py-2">{stock['Revenue Growth (%)']}</td>
              <td className="px-4 py-2">{stock['EPS Growth (%)']}</td>
              <td className="px-4 py-2">{stock['Current Ratio']}</td>
              <td className="px-4 py-2">{stock['Gross Margin (%)']}</td>
            </tr>
          ))}
        </tbody>
      </table> ) : (
      <div className="p-4 text-center">No data to display</div>
    )}
    </div>
  );
};

export default StockTable;