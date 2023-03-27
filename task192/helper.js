import { dangerousFunction } from './functions.js';

export const safeCall = () => {
  try {
    
    dangerousFunction();
  } catch (error) {
    console.log(error);
  }
}
