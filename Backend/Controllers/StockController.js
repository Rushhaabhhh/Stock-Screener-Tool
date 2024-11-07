const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

exports.getFilteredStocks = async (req, res) => {
  try {
    const { marketCap, peRatio, roe } = req.query;
    const stocks = await getStocksFromCSV();
    const filteredStocks = stocks.filter((stock) => {
      return (
        stock.marketCap > marketCap &&
        stock.peRatio < peRatio &&
        stock.roe > roe
      );
    });
    res.status(200).json(filteredStocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStocksFromCSV = () => {
  return new Promise((resolve, reject) => {
    const stockData = [];
    fs.createReadStream(path.join(__dirname, '../StockData.csv'))
      .pipe(csv())
      .on('data', (row) => {
        stockData.push({
          marketCap: parseFloat(row['Market Capitalization']),
          peRatio: parseFloat(row['P/E Ratio']),
          roe: parseFloat(row['ROE']),
          debtToEquity: parseFloat(row['Debt-to-Equity Ratio']),
          dividendYield: parseFloat(row['Dividend Yield']),
          revenueGrowth: parseFloat(row['Revenue Growth']),
          epsGrowth: parseFloat(row['EPS Growth']),
          currentRatio: parseFloat(row['Current Ratio']),
          grossMargin: parseFloat(row['Gross Margin']),
        });
      })
      .on('end', () => {
        resolve(stockData);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};