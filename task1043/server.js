import express from 'express';
import { getFormattedDate } from './functions.js';
import { logRequestTimestamp, logRequestType } from './middleware.js';

const server = express();
server.use(getFormattedDate)
server.use(logRequestType);
server.use(logRequestTimestamp)

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
})

export { server };