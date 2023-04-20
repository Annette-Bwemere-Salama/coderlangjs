import express from 'express';
import { logger } from './middleware';
const server = express();

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
});

server.use(logger({ log: true }));

server.get('/about', (req, res) => {
  res.send(`I'm going to become a JS Developer in ${new Date().getFullYear()}!`);
})


export { server };