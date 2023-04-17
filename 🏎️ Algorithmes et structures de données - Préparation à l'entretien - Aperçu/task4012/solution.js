import { getDiff } from './helper.js';

const original = [ 10, 10, 1, 5, 12, 15 ];
const fake = [ 10, 10, 20, 55, 5, 5, 12, 100, 200 ];

console.log(`The diff between ${original} and ${fake}, is ${getDiff(original, fake)}`);