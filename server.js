// imports the http package from Node
const http = require('http');
const app = require('./backend/app')

const port = process.env.PORT || 3000

app.set('port', port);
// creates a server and stores it in a constant
// we pass app as an arg so that it will listen for requests
const server = http.createServer(app);

// activates the server to listen for requests when started
server.listen(port);
