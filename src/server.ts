import app from "./app";
import * as http from "http";
import * as dotenv from 'dotenv';
dotenv.config()

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

const port = process.env.PORT || process.env.DEV_PORT;
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    console.log(`API running on localhost:${port}`);
  });

export default server;