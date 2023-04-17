import { server } from './server.js';
import { logRequestTimestamp } from './middleware.js';
const port = 8080;
// app.use(logRequestTimestamp);


server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});