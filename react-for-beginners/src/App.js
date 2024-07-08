import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then( (response) =>
      response.json()
    ).then((data) => {
      // console.log(data);
      setLoading(false);
      setCoins(data);
    });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading....</strong> : null}
      <select>
        {coins.map((coin) =>
           <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
        )}
      </select>
    </div>
  )
}

export default App;
