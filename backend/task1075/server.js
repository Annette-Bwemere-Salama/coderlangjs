import express from 'express';

const server = express();

//Here, we'll implement our routes and middleware

server.get('/check', (req, res, next) => {
    
        res.json({ version: '0.0.1' })
    // next()
})

export { server };