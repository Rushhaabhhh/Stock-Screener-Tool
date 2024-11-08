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
        return true;
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
    let parsedValue;
    if (value === 'true' || value === 'false') {
      parsedValue = value === 'true';
    } else if (!isNaN(parseFloat(value))) {
      parsedValue = parseFloat(value);
    } else {
      parsedValue = value;
    }
    return { field, operator, value: parsedValue };
  });
  return filters;
};

const fetchStockData = async () => {
  const response = await fetch('https://raw.githubusercontent.com/Rushhaabhhh/Stock-Screener-Tool/refs/heads/main/StockDataset.csv');
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
