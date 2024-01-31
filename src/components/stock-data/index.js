import React, { useState } from "react";
import "./index.css";

export default function StockData() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const dateHandler = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const searchHandler = async () => {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
    );

    const data = await response.json();
    const res = data.data[0];
    setResult(res);
    console.log("result = ", res);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          onChange={dateHandler}
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
        />
        <button
          className=""
          id="submit-button"
          onClick={searchHandler}
          data-testid="submit-button"
        >
          Search
        </button>
      </section>
      {(result === undefined) && (
        <div
          className="mt-50 slide-up-fade-in"
          id="no-result"
          data-testid="no-result"
        >
          No Results Found
        </div>
      )}
      {result !== "" && result !== undefined && (
        <ul
          className="mt-50 slide-up-fade-in styled"
          id="stockData"
          data-testid="stock-data"
        >
        <li className="py-10" >Open: {result.open}</li>
        <li className="py-10" >Close: {result.close}</li>
        <li className="py-10" >High: {result.high}</li>
        <li className="py-10" >Low: {result.low}</li>
        </ul>
      )}
    </div>
  );
}
