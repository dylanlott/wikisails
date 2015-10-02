/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Article = require('../models/Article.js'); 

module.exports = {

	create: function(req, res){
	    console.log(req); 
	    var newArticle = new Article(req.body);
	    newArticle.user = req.user._id;
	    newArticle.save(function(err, article) {
	      if (err) {
	        console.log(err)
	        return res.status(500).end();
	      }
	      return res.json(article);
	    });
  	},

	delete: function(){
		
	},

	listOne: function(){
		Article
			.findById(req.params.id)
			.exec()
			.then(function(article){
				res.status(200).json(article); 
			}, function(err){
				res.status(500).json(err); 
			})
	},

	findByTitle: function(req, res){
		Article
			.find({'title': req.title})
			.exec()
			.then(function(articles){
				res.status(200).json(articles); 
			}, function(err){
				res.status(500).json(err); 
			}); 
	},

	update: function(){
		
	}

	
};

