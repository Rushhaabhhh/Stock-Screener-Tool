import stockData from './stockData.json';

// const getFilteredStocks = async (filters) => {
//   let filteredStocks = stockData;

//   const { marketCap, peRatio, roe } = filters;
//   if (marketCap) filteredStocks = filteredStocks.filter(stock => stock.marketCap >= parseFloat(marketCap));
//   if (peRatio) filteredStocks = filteredStocks.filter(stock => stock.peRatio <= parseFloat(peRatio));
//   if (roe) filteredStocks = filteredStocks.filter(stock => stock.roe >= parseFloat(roe));

//   return filteredStocks;
// };

// export default getFilteredStocks;


const getFilteredStocks = async (filters) => {
  const response = await fetch(`https://localhost:5000/api/stocks?marketCap=${filters.marketCap}&peRatio=${filters.peRatio}&roe=${filters.roe}`);
  const data = await response.json();
  return data;
};

export default getFilteredStocks;