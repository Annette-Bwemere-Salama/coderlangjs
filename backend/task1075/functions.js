

export const startServer = (port, server) => {
    server.listen(port, () => {
        console.log('Server is running on port' + port)
    });
}