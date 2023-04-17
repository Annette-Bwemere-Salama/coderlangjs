/**
 * Implement the fastSort function which should sort the array.
 *
 * Sort order should be ascending.
 *
 * The time complexity should be better than O(n^2), preferably O(n*log(n)).
 *
 * You can't use any third party modules or built in Array functions.
 * */

import { fastSort } from './helper.js';

const arr = [ 4, 1, 2, 3, -1, 5, 6, 2, 8, -5 ];

console.log(`Here's the original array:`, arr);
fastSort(arr);
console.log(`Here's the sorted array:`, arr);