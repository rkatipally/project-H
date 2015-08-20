angular.module("common").factory("article", function(){
	
	function Article(id, topic, heading, content, keywords, cmommentsCnt){
		this.id = id;
		this.topic  =  topic;
		this.heading = heading;
		this.content = content;
		this.keywords =  keywords;
		this.commentsCnt = commentsCnt;
		
		Article.proptotype.getHeading = function(){
			return this.heading;
		};
		
		Article.proptotype.getTopic = function(){
			return this.topic;
		};
		
		Article.proptotype.getContent = function(){
			return this.getContent;
		};
		
		Article.proptotype.getKeywords = function(){
			return this.keywords;
		};
		
		Article.proptotype.setHeading = function(heading){
			 this.heading = heading;
		};
		
		Article.proptotype.setTopic = function(topic){
			 this.topic = topic;
		};
		
		Article.proptotype.setContent = function(content){
			 this.content = content;
		};
		
		Article.proptotype.seteywords = function(keywords){
			this.keywords = keywords;
		};
		
		Article.proptotype.getCommentsCnt = function(){
			return this.CommentsCnt;
		};
		
		Article.proptotype.setCommentsCnt = function(commentsCnt){
			 this.commentsCnt = commentsCnt;
		};
		
		
	}
	
	return Article;
	
});

