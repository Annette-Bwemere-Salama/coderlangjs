import { shortenByWords } from './functions.js';

const longString = 'this string is quiteeeeeeeeeeeeeee long, especially for its age.'
const shortString = 'a short one'

console.log(shortenByWords(longString, 20));
console.log(shortenByWords(shortString, 20));
