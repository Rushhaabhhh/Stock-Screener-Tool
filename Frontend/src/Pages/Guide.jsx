import React from 'react';

const Guide = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">Guide to Creating Queries</h1>
        
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-600">
            In this guide, you'll learn how to create queries for filtering stocks based on key parameters like 
            Market Capitalization, P/E Ratio, ROE, and more. Follow the examples to construct effective queries 
            for your search.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Parameters</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Market Capitalization</strong>: Total market value, expressed in billions (e.g., `Market Capitalization &gt; 300`).</li>
            <li><strong>P/E Ratio</strong>: Price-to-Earnings ratio, a metric for valuation (e.g., `P/E Ratio &lt; 15`).</li>
            <li><strong>ROE</strong>: Return on Equity, expressed as a percentage (e.g., `ROE &gt; 20`).</li>
            <li><strong>Debt-to-Equity Ratio</strong>: A measure of company leverage (e.g., `Debt/Equity Ratio &lt; 1`).</li>
            <li><strong>Dividend Yield</strong>: Dividend yield percentage (e.g., `Dividend Yield &gt; 2`).</li>
            <li><strong>Revenue Growth</strong>: Annual revenue growth, in percentage (e.g., `Revenue Growth &gt; 10`).</li>
            <li><strong>EPS Growth</strong>: Growth in earnings per share, in percentage (e.g., `EPS Growth &gt; 5`).</li>
            <li><strong>Current Ratio</strong>: Liquidity ratio (e.g., `Current Ratio &gt; 1.5`).</li>
            <li><strong>Gross Margin</strong>: Percentage of gross profit margin (e.g., `Gross Margin &gt; 40`).</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Operators</h2>
          <p className="text-gray-600 mb-4">The following operators are used to create comparisons in your query:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>&gt;</strong> : Greater than (e.g., `Market Capitalization &gt; 100`).</li>
            <li><strong>&lt;</strong> : Less than (e.g., `P/E Ratio &lt; 15`).</li>
            <li><strong>=</strong> : Equal to (e.g., `ROE = 20`).</li>
          </ul>
          <p className="text-gray-600">
            Combine conditions using `AND` to filter stocks by multiple parameters (e.g., `Market Capitalization &gt; 300 AND ROE &gt; 20`).
          </p>
        </section>

        

        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Example Queries</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Example 1:</strong> `Market Capitalization &gt; 500 AND ROE &gt; 15` - Finds companies with a market cap over $500 billion and ROE above 15%.</li>
            <li><strong>Example 2:</strong> `P/E Ratio &lt; 20 AND Dividend Yield &gt; 2` - Filters companies with a P/E ratio below 20 and a dividend yield over 2%.</li>
            <li><strong>Example 3:</strong> `Debt/Equity Ratio &lt; 1 AND Revenue Growth &gt; 10` - Targets companies with low debt and high revenue growth.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Tips</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Keep queries simple by focusing on 2-3 parameters for more relevant results.</li>
            <li>Use `&lt; 15` or `&gt; 10` rather than `=` when possible, as stock values fluctuate often.</li>
          </ul>
        </section>
        
        <div className="text-center">
          <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Back to Stock Screener
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;
