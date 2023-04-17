import { getApples } from './functions.js'

const fruits = [
  { type: 'apple', weight: 0.15 },
  { type: 'orange', weight: 0.21 },
  { type: 'banana', weight: 0.17 },
  { type: 'apple', weight: 0.25 },
  { type: 'pineapple', weight: 1.5 },
];

console.log(getApples(fruits)); // [ { type: 'apple', weight: 0.15 }, { type: 'apple', weight: 0.25 } ]
