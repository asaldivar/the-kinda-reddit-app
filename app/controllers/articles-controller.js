var Article = require('../models/article.js');

var create = function(request, response) {
  var article = new Article(request.body);

  article.save(function(error) {
    if (error) console.error(error);

    response.json({message: 'Article successfully created'});
  });
};

var index = function(request, response) {
  Article.find(function(error, articles) {
    if (error) console.error(error);

    response.json(articles)
  })
};

var show = function(request, response) {
  Article.findById(request.params.articleId, function(error, article) {
    if (error) console.error(error);

    response.json(article);
  })
};

module.exports = {
  create: create,
  index: index,
  show: show
}