const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true}
});

// Model is created and exported.
module.exports = mongoose.model('Post', postSchema);
