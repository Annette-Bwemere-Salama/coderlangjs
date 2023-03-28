import { server } from './server.js';
import { startServer } from './functions.js';

const port = 8080;

// startServer(server, port);
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
