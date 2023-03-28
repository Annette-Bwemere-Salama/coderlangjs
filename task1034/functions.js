import express from "express"
export const startServer = (server, port) => {
    server.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
    
}