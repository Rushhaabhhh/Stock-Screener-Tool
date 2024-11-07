import Papa from 'papaparse';

const applyFilters = (query, stockData) => {
  const filters = parseQuery(query);
  return getFilteredStocks(filters, stockData);
};

const getFilteredStocks = (filters, stockData) => {
  return stockData.filter((stock) => {
    return filters.every((filter) => {
      const stockValue = stock[filter.field];
      if (typeof stockValue !== 'number') {
        return true; // Skip filtering if the value is not a number
      }
      switch (filter.operator) {
        case '>':
          return stockValue > filter.value;
        case '<':
          return stockValue < filter.value;
        case '>=':
          return stockValue >= filter.value;
        case '<=':
          return stockValue <= filter.value;
        case '=':
          return stockValue === filter.value;
        default:
          return true;
      }
    });
  });
};

const parseQuery = (query) => {
  const conditions = query.split('AND').map((condition) => condition.trim());
  const filters = conditions.map((condition) => {
    const [field, operator, value] = condition.split(' ');
    return { field, operator, value: parseFloat(value) };
  });
  return filters;
};

const fetchStockData = async () => {
  const response = await fetch('./StockDataset.csv');
  const csvText = await response.text();
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        console.log('Fetched stock data:', result.data);
        resolve(result.data);
      },
      error: (error) => reject(error)
    });
  });
};

export { applyFilters, fetchStockData };


