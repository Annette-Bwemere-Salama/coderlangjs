/**
 * Implement the sort function which should sort the array.
 *
 * Sort order should be ascending.
 *
 * You can't use any third party modules or built in Array functions.
 * */

import { sort } from './helper.js';

const arr = [ 4, 1, 2, 3, -1, 5, 6, 2, 8, -5 ];

console.log(`Here's the original array:`, arr);
sort(arr);
console.log(`Here's the sorted array:`, arr);