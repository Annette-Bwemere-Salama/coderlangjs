import { getUser } from './db.js';

getUser(1).then(console.log).catch(e => console.log(e.message));

getUser().then(console.log).catch(e => console.log(e.message));