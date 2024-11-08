# Stock Screening Tool
## Overview
The Stock Screening Tool is a web-based application that allows users to filter and view stocks based on various financial parameters. Users can input conditions in a query format, similar to the stock screening feature on Screener.in. The tool supports filtering based on key metrics such as Market Capitalization, P/E Ratio, ROE, Debt-to-Equity Ratio, Dividend Yield, Revenue Growth, EPS Growth, Current Ratio, and Gross Margin. The results are displayed in a tabular format with sorting and pagination features.

This project is a demonstration of how to build a stock screening tool using React, with a focus on UX/UI design, similar to the Screener.in stock screening interface.

## Features
- Dynamic Query Input : Users can create custom queries with conditions such as Greater than, Less than, or Equal to for each parameter (e.g., Market Capitalization > 10000 AND ROE > 15 AND P/E Ratio < 20).
- AND-Only Logic : Stocks will only be displayed if they meet all conditions defined in the query.
- Tabular Display of Results : Display the results in a table with sortable columns for each parameter (Market Capitalization, P/E Ratio, ROE, etc.).
- Pagination : Results will be paginated if more than 10 stocks are displayed.
- Sorting Functionality : Sort stocks by any of the 9 parameters (Market Capitalization, P/E Ratio, ROE, etc.).


https://github.com/user-attachments/assets/31c71536-55f6-4036-948d-ac5438003ac4


## Installation & Setup

### Clone the Repository :
```bash
git clone https://github.com/your-username/stock-screening-tool.git
```
### Navigate to the Project Folder :
```bash
cd stock-screening-tool
```
### Install Dependencies :
```bash
npm install
```
### Run the Project :
```bash
npm start / npm run dev
```

## Usage
- Create Queries :
  - Type conditions in the query input box like Market Capitalization > 350 AND ROE > 10.
  - You can add multiple conditions by separating them with AND.
- View Results:
  - After entering the query, the stock data will be filtered and displayed in a table.
  - You can click on column headers to sort the results.
- Pagination is available if there are more than 10 results.

## Query Guide

The Stock Screening Tool allows you to filter stocks by specifying conditions on various financial parameters. Each parameter has a unique **ID** that can be used in queries. Here’s a guide on using each parameter with examples.

### Available Parameters

| Parameter ID             | Label                     | Unit  | Example Query                     |
|--------------------------|---------------------------|-------|-----------------------------------|
| `Market Capitalization`  | Market Capitalization     | B     | `Market Capitalization > 5000`    |
| `P/E Ratio`              | P/E Ratio                 |       | `P/E Ratio < 20`                  |
| `ROE`                    | ROE                       | %     | `ROE > 15`                        |
| `Debt/Equity Ratio`      | Debt-to-Equity Ratio      |       | `Debt/Equity Ratio < 1`           |
| `Dividend Yield`         | Dividend Yield            | %     | `Dividend Yield > 2`              |
| `Revenue Growth`         | Revenue Growth            | %     | `Revenue Growth > 10`             |
| `EPS Growth`             | EPS Growth                | %     | `EPS Growth > 5`                  |
| `Current Ratio`          | Current Ratio             |       | `Current Ratio > 1.5`             |
| `Gross Margin`           | Gross Margin              | %     | `Gross Margin > 40`               |

### Query Format

To create a query:
1. Use the **Parameter ID** from the table above.
2. Choose a condition: `>`, `<`, or `=` depending on the filter you want to apply.
3. Input a numeric value to complete the condition.

You can combine multiple conditions using `AND`. For example :

### Example 1 : 
```bash
Market Capitalization < 300 AND ROE > 15
```
This query will display stocks with a market cap above $300 billion and ROE over 15%.

### Example 2:
```bash
P/E Ratio < 20 AND Dividend Yield > 2
```
This query filters stocks with a P/E ratio below 20 and a dividend yield above 2%.

### Example 3:

```bash
Debt/Equity Ratio < 1 AND Revenue Growth > 10
```
This query will show stocks with low debt and high revenue growth.
