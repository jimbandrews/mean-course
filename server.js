// still importing app and http
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

// makes sure port number is valid when trying to set up a port
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// check the type of error occurred, respond, and exit node server
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// logging that we are listening for incoming requests
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

// still setting up port
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// set up server, activate it, and register listeners above
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
