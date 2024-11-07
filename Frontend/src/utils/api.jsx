import stockData from './stockData.json';

const getFilteredStocks = async (filters) => {
  let filteredStocks = stockData;

  const { marketCap, peRatio, roe } = filters;
  if (marketCap) filteredStocks = filteredStocks.filter(stock => stock.marketCap >= parseFloat(marketCap));
  if (peRatio) filteredStocks = filteredStocks.filter(stock => stock.peRatio <= parseFloat(peRatio));
  if (roe) filteredStocks = filteredStocks.filter(stock => stock.roe >= parseFloat(roe));

  return filteredStocks;
};

export default getFilteredStocks;
