// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser
app.use(bodyParser.json());

// Create array to store comments
let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Post a comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});