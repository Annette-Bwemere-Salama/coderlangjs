import React from 'react';
import { olympicGamesResult } from './olympicGamesResult';
import CountryResults from './components/CountryResults';
function App() {
  return (
    <>
      {olympicGamesResult.map((result, index) => (
        <CountryResults key={index} country={result.country} medals={result.medals} />
      ))}
    </>
  );
}

export default App;
