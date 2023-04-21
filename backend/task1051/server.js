import express from 'express';
// import jsonConfig from "./constants"
import { config } from './constants';
const server = express();

server.get('/config', (req, res) => {
  const conf = config
  return  res.json(conf);
})

export { server };