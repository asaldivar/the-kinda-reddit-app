var express = require('express');
var apiRouter = express.Router();
var Article = require('../models/article.js');
var articlesController = require('../controllers/articles-controller.js')

apiRouter.route('/articles')

  .post(articlesController.create)

  .get(articlesController.index);

apiRouter.route('/articles/:articleId')

  .get(articlesController.show);

module.exports = apiRouter;
