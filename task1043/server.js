import express from 'express';
import { getFormattedDate } from './functions.js';
import { logRequestType } from './middleware.js';

const server = express();
server.use(getFormattedDate)
server.use(logRequestType);

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
})

export { server };