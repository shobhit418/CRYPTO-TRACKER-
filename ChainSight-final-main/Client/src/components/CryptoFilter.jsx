// import React, { useState } from "react";
// function CryptoFilter() {
//   const [price, setPrice] = useState("");
//   const [marketCap, setMarketCap] = useState("");
//   const [changePercentage, setChangePercentage] = useState("");
//   const [comparisonOperator, setComparisonOperator] = useState("greater");
//   const [selectedFilter, setSelectedFilter] = useState("price");
//   const filters = [
//     { value: "price", label: "Price" },
//     { value: "market_cap", label: "Market Cap" },
//     { value: "change_percentage_1m", label: "1-Month Change %" }
//   ];
//   function filterCryptos(event)  {
//     event.preventDefault();
//     const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         let filteredCryptos = data;
//         if (selectedFilter === "price") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.current_price > parseFloat(price)
//               : crypto.current_price < parseFloat(price)
//           );
//         } else if (selectedFilter === "market_cap") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.market_cap > parseFloat(marketCap)
//               : crypto.market_cap < parseFloat(marketCap)
//           );
//         } else if (selectedFilter === "change_percentage_1m") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.price_change_percentage_1h > parseFloat(changePercentage)
//               : crypto.price_change_percentage_1h < parseFloat(changePercentage)
//           );
//         }
//         setCryptos(filteredCryptos);
//       });
//   }
//   const [cryptos, setCryptos] = useState([]);
//   return (
//     <div className="container mx-auto my-20">
//       <form onSubmit={filterCryptos}>
//       <table>
//           <thead>
//             <tr>
//               <th>
//         <label htmlFor="filter">Filter:</label>
//         <select
//           id="filter"
//           name="filter"
//           value={selectedFilter}
//           onChange={(event) => setSelectedFilter(event.target.value)}
//         >
//           {filters.map((filter) => (
//             <option key={filter.value} value={filter.value}>
//               {filter.label}
//             </option>
//           ))}
//         </select>
//         </th>
//         <th>
//         <label htmlFor="comparison">Comparison:</label>
//         <select
//           id="comparison"
//           name="comparison"
//           value={comparisonOperator}
//           onChange={(event) => setComparisonOperator(event.target.value)}>
//           <option value="greater">Greater Than</option>
//           <option value="lesser">Less Than</option>
//         </select>
//         </th>
//         <th>
//         {selectedFilter === "market_cap" && (
//           <div>
//             <label htmlFor="marketcap">Market Cap:</label>
//             <input
//               type="text"
//               id="marketcap"
//               name="marketcap"
//               value={marketCap}
//               onChange={(event) => setMarketCap(event.target.value)}
//             />
//           </div>
//         )}
//         {selectedFilter === "change_percentage_1m" && (
//           <div>
//             <label htmlFor="percentage">Change Percentage:</label>
//             <input
//               type="text"
//               id="percentage"
//               name="percentage"
//               value={changePercentage}
//               onChange={(event) => setChangePercentage(event.target.value)}
//             />
//           </div>
//         )}
//         {selectedFilter === "price" && (
//           <div>
//             <label htmlFor="price">Price:</label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               value={price}
//               onChange={(event) => setPrice(event.target.value)}
//             />
//           </div>
//         )}
//         </th>
//         <input type="submit" value="Filter" />
//         </tr>
//         </thead>
//         </table>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Symbol</th>
//             <th>Price</th>
//             <th>Market Cap</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cryptos.map((crypto) => (
//             <tr key={crypto.id}>
//               <td>{crypto.name}</td>
//               <td>{crypto.symbol.toUpperCase()}</td>
//               <td>${crypto.current_price}</td>
//               <td>${crypto.market_cap}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default CryptoFilter;

// import React, { useState } from "react";
// function CryptoFilter() {
//   const [price, setPrice] = useState("");
//   const [marketCap, setMarketCap] = useState("");
//   const [changePercentage, setChangePercentage] = useState("");
//   const [comparisonOperator, setComparisonOperator] = useState("greater");
//   const [selectedFilter, setSelectedFilter] = useState("price");
//   const filters = [
//     { value: "price", label: "Price" },
//     { value: "market_cap", label: "Market Cap" },
//     { value: "change_percentage_1m", label: "1-Month Change %" }
//   ];
//   function filterCryptos(event)  {
//     event.preventDefault();
//     const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         let filteredCryptos = data;
//         if (selectedFilter === "price") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.current_price > parseFloat(price)
//               : crypto.current_price < parseFloat(price)
//           );
//         } else if (selectedFilter === "market_cap") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.market_cap > parseFloat(marketCap)
//               : crypto.market_cap < parseFloat(marketCap)
//           );
//         } else if (selectedFilter === "change_percentage_1m") {
//           filteredCryptos = data.filter((crypto) =>
//             comparisonOperator === "greater"
//               ? crypto.price_change_percentage_1h > parseFloat(changePercentage)
//               : crypto.price_change_percentage_1h < parseFloat(changePercentage)
//           );
//         }
//         setCryptos(filteredCryptos);
//       });
//   }
//   const [cryptos, setCryptos] = useState([]);
//   return (
//     <div>
//       <form onSubmit={filterCryptos}>
//       <table>
//           <thead>
//             <tr>
//               <th>
//         <label htmlFor="filter">Filter:</label>
//         <select
//           id="filter"
//           name="filter"
//           value={selectedFilter}
//           onChange={(event) => setSelectedFilter(event.target.value)}
//         >
//           {filters.map((filter) => (
//             <option key={filter.value} value={filter.value}>
//               {filter.label}
//             </option>
//           ))}
//         </select>
//         </th>
//         <th>
//         <label htmlFor="comparison">Comparison:</label>
//         <select
//           id="comparison"
//           name="comparison"
//           value={comparisonOperator}
//           onChange={(event) => setComparisonOperator(event.target.value)}>
//           <option value="greater">Greater Than</option>
//           <option value="lesser">Less Than</option>
//         </select>
//         </th>
//         <th>
//         {selectedFilter === "market_cap" && (
//           <div>
//             <label htmlFor="marketcap">Market Cap:</label>
//             <input
//               type="text"
//               id="marketcap"
//               name="marketcap"
//               value={marketCap}
//               onChange={(event) => setMarketCap(event.target.value)}
//             />
//           </div>
//         )}
//         {selectedFilter === "change_percentage_1m" && (
//           <div>
//             <label htmlFor="percentage">Change Percentage:</label>
//             <input
//               type="text"
//               id="percentage"
//               name="percentage"
//               value={changePercentage}
//               onChange={(event) => setChangePercentage(event.target.value)}
//             />
//           </div>
//         )}
//         {selectedFilter === "price" && (
//           <div>
//             <label htmlFor="price">Price:</label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               value={price}
//               onChange={(event) => setPrice(event.target.value)}
//             />
//           </div>
//         )}
//         </th>
//         <input type="submit" value="Filter" />
//         </tr>
//         </thead>
//         </table>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Symbol</th>
//             <th>Price</th>
//             <th>Market Cap</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cryptos.map((crypto) => (
//             <tr key={crypto.id}>
//               <td>{crypto.name}</td>
//               <td>{crypto.symbol.toUpperCase()}</td>
//               <td>${crypto.current_price}</td>
//               <td>${crypto.market_cap}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default CryptoFilter;


import React, { useState } from "react";

function CryptoFilter() {
  const [filters, setFilters] = useState([
    { id: 1, field: "price", operator: "greater", value: "" }
  ]);

  const [cryptos, setCryptos] = useState([]);

  function filterCryptos(event) {
    event.preventDefault();
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let filteredCryptos = data;
        filters.forEach((filter) => {
          if (filter.field === "price") {
            filteredCryptos = filteredCryptos.filter((crypto) =>
              filter.operator === "greater"
                ? crypto.current_price > parseFloat(filter.value)
                : crypto.current_price < parseFloat(filter.value)
            );
          } else if (filter.field === "market_cap") {
            filteredCryptos = filteredCryptos.filter((crypto) =>
              filter.operator === "greater"
                ? crypto.market_cap > parseFloat(filter.value)
                : crypto.market_cap < parseFloat(filter.value)
            );
          } else if (filter.field === "change_percentage_1m") {
            filteredCryptos = filteredCryptos.filter((crypto) =>
              filter.operator === "greater"
                ? crypto.price_change_percentage_1h > parseFloat(filter.value)
                : crypto.price_change_percentage_1h < parseFloat(filter.value)
            );
          }
        });
        setCryptos(filteredCryptos);
      });
  }

  function handleFilterChange(index, field, value) {
    const updatedFilters = [...filters];
    updatedFilters[index] = { ...updatedFilters[index], field, value };
    setFilters(updatedFilters);
  }

  function handleOperatorChange(index, operator) {
    const updatedFilters = [...filters];
    updatedFilters[index] = { ...updatedFilters[index], operator };
    setFilters(updatedFilters);
  }

  function addFilter() {
    const newFilter = { id: filters.length + 1, field: "price", operator: "greater", value: "" };
    setFilters([...filters, newFilter]);
  }

  function removeFilter(id) {
    const updatedFilters = filters.filter((filter) => filter.id !== id);
    setFilters(updatedFilters);
  }

  return (
    <div className="container mx-auto my-20">
      <form onSubmit={filterCryptos}>
        <table>
          <thead>
            <tr>
              {filters.map((filter, index) => (
                <th key={filter.id}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <label htmlFor={`filter-${filter.id}`}>Filter:</label>
                        <select
                          id={`filter-${filter.id}`}
                          name={`filter-${filter.id}`}
                          value={filter.field}
                          onChange={(event) => handleFilterChange(index, event.target.value, filter.value)}
                        >
                        <option value="price">Price</option>
                        <option value="market_cap">Market Cap</option>
                        <option value="change_percentage_1m">1-Month Change %</option>
                        </select>
                      </th>
                      <th>
                        <label htmlFor={`comparison-${filter.id}`}>Comparison:</label>
                        <select
                          id={`comparison-${filter.id}`}
                          name={`comparison-${filter.id}`}
                          value={filter.operator}
                          onChange={(event) => handleOperatorChange(index, event.target.value)}
                        >
                        <option value="greater">Greater Than</option>
                        <option value="lesser">Less Than</option>
                        </select>
                      </th>
                      <th>
                        {filter.field === "market_cap" && (
                          <div>
                            <label htmlFor={`marketcap-${filter.id}`}>Market Cap:</label>
                            <input
                              type="text"
                              id={`marketcap-${filter.id}`}
                              name={`marketcap-${filter.id}`}
                              value={filter.value}
                              onChange={(event) => handleFilterChange(index, filter.field, event.target.value)}
                            />
                          </div>
                        )}
                        {filter.field === "change_percentage_1m" && (
                          <div>
                            <label htmlFor={`percentage-${filter.id}`}>Change Percentage:</label>
                            <input
                              type="text"
                              id={`percentage-${filter.id}`}
                              name={`percentage-${filter.id}`}
                              value={filter.value}
                              onChange={(event) => handleFilterChange(index, filter.field, event.target.value)}
                            />
                          </div>
                        )}
                        {filter.field === "price" && (
                          <div>
                            <label htmlFor={`price-${filter.id}`}>Price:</label>
                            <input
                              type="text"
                              id={`price-${filter.id}`}
                              name={`price-${filter.id}`}
                              value={filter.value}
                              onChange={(event) => handleFilterChange(index, filter.field, event.target.value)}
                            />
                          </div>
                        )}
                      </th>
                      </tr>
                      <tr>
                      <th>
                      {index > 0 && (
                        <button type="button" onClick={() => removeFilter(filter.id)}>
                          Remove
                        </button>
                      )}
                      </th>
                      </tr>
                    </thead>
                  </table>
                </th>
              ))}
              <th>
                <button type="button" onClick={addFilter}>
                  Add Filter
                </button>
              </th>
            </tr>
          </thead>
        </table>
        <input type="submit" value="Filter" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price}</td>
              <td>${crypto.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoFilter;
