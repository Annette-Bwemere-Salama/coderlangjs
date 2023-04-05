import React from 'react';
import { olympicGamesResult } from './olympicGamesResult';

function App() {
  return     <div>
  <CountryResults country={olympicGamesResult[0].country} medals={olympicGamesResult[0].medals} />
  <CountryResults country={olympicGamesResult[1].country} medals={olympicGamesResult[1].medals} />
</div>
}

export default App;
