export const startServer = (server, port) => {

    server.listen(port, ()=>{
        console.log(`${port} est cool`);
    })
}