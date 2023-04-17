import React from 'react'

export function CountryResults(props) {
    const {country,medals} = props;
    const { gold, silver, bronze } = medals;
    const total = gold + silver + bronze;
  return (
    <div>
      <h2>{country}</h2>
      <ul>
        <li>gold: {medals.gold}</li>
        <li>silver: {medals.silver}</li>
        <li>bronze: {medals.bronze}</li>
        <li>Total: {total}</li>
      </ul>
    </div>
  )
}

export default CountryResults
