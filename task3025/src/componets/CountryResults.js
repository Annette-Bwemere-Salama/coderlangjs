import React from 'react'

function CountryResults(props) {
    const {country,medals} = props;
    // const medalss = {gold: 1, silver: 2, bronze: 3}
    const { gold, silver, bronze } = medals;
    const total = gold + silver + bronze;
  return (
    <div>
      <h2>{country}</h2>
      <ul>
        <li>{...total}</li>
        <li>Golder: {gold}</li>
        <li>silver: {silver}</li>
        <li>Bronze: {bronze}</li>

      </ul>
    </div>
  )
}

export default CountryResults
