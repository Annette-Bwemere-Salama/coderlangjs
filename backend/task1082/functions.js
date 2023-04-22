import { getUserCount } from './db.js';
import { handleUnknownError } from './errorHandlers.js';

export const printUserCount = () => (resolve,reject)=> {
  getUserCount()
  
    .then(users => {
      console.log(`There are ${users.length} users.`)
    })
    .catch(
      error => {
        if (reject) {
          
          handleUnknownError(error)
        }
        }
      )
  // try {
  //   console.log(getUserCount())
  //    resolve(getUserCount().then(console.log)) ;
  // } catch (e) {
  //   reject(handleUnknownError(e));
    
  // }

  resolve
}