import React from 'react';

const StockTable = ({ stocks }) => {
  if (!stocks || stocks.length === 0) {
    return <p>No stocks available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(stocks[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr key={index}>
            {Object.keys(stock || {}).map((key) => (
              <td key={key}>{stock[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
