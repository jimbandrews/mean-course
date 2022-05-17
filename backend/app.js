// This file will hold the express app and all its features
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// extracts data from the body of the http request
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// handles post requests for the /api/posts endpoint
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!"
  });
});

// the new first arg is the path that we have to send a request to
// we can call either app.use or app.get here
app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'osidf80932',
      title: 'First server-side post',
      content: 'This is coming from a server.'
    },
    {
      id: 'ljknvkd435',
      title: 'Second server-side post',
      content: 'This is coming from a server!'
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
