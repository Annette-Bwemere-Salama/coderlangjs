import { server } from "./server";
const port = 8080

export const startServer = () => {
    server.listen(port, () => {
        console.log('Server is running on port' + port)
    });
}