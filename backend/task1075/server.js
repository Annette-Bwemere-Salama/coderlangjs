import express from 'express';
import { CONFIG } from './constants';
const server = express();

//Here, we'll implement our routes and middleware

server.get('/check', (req, res, next) => {
    
        res.json({ version: '0.0.1' })
    // next()
})

server.get('/config', (req, res, next) => {
    res.json(
        CONFIG
    )
})
export { server };