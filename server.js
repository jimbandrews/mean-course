// imports the http package from Node
const http = require('http');

// creates a server and stores it in a constant
const server = http.createServer((req, res) => {
  // This will just output the text
  res.end('This is my first response.');
});

// activates the server to listen for requests when started
server.listen(process.env.PORT || 3000);
