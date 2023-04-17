import { logNames } from './helper.js'

export const users = [
  { name: 'Jake', age: 15 },
  { name: 'John', age: 16 },
  { name: 'Jill', age: 25 },
  { name: 'Bill', age: 82 },
];

logNames(users); // Jake, John, Jill, Bill
