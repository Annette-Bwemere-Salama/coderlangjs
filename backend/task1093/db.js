import { loadData } from './storage.js';

export const getUser = (userId) => new Promise((resolve, reject) => {
  //check userId and reject if it's missing
if (!userId) {
  setTimeout(() => {
    reject(new Error ("You lost id is missing"))
  })
} if(userId) {
  
  setTimeout(() => {
    //use loadData and resolve with the user object if the id is present
    // resolve(loadData());
    // return loadData.friends.map(userId)
    const users = loadData().users;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        // resolve the promise with the matching user
        resolve(users[i]);
      }
    }
  }, 200);
}
});