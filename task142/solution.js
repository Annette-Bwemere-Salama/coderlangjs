import { shorten } from './functions.js';

const longString = 'this string is quite long, especially for its age.'
const shortString = 'a short one'

console.log(shorten(longString, 20));
console.log(shorten(shortString, 20));
