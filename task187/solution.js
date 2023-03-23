import { isIdentical } from './helper.js';

const cat = {
  name: 'Tom',
  age: '2',
  isHappy: true,
}

const dog = {
  name: 'Rex',
  age: '2',
  isHappy: true,
}
console.log(isIdentical(cat, dog));