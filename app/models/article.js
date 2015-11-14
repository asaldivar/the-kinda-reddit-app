var mongoose = require('mongoose');
var Schema = mongoose.Schema; // allows us to create a constructor for our model

var ArticleSchema = new Schema({
  title: String,
  created_at: Date,
  votes: {
    type: Number,
    default: 0
  },
  author: String,
  content: String
});

ArticleSchema.pre('save', function(next) {
  // performing your logic
  this.created_at = new Date();
  next();
});

module.exports = mongoose.model('Article', ArticleSchema);
