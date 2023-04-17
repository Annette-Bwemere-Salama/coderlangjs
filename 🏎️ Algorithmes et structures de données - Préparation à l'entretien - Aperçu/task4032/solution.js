/**
 * Implement the function `isArrayIdentical` in helper.js
 *
 * It should return true if two arrays have the same elements. Order of the elements doesn't matter.
 *
 * Arrays will only have plain fields (strings, numbers or booleans)
 *
 * */

import { isArrayIdentical } from './helper.js';

const parkingLot = ['toyota', 'bmw', 'honda'];
const garage = ['bmw', 'honda', 'toyota'];
const policeStation = ['mercedes', 'bmw', 'honda'];

console.log(isArrayIdentical(parkingLot, garage)); //true
console.log(isArrayIdentical(parkingLot, policeStation)); //false