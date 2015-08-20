angular.module("common").factory("topic", function(){
	
	function Topic(id, name, categories, articles, topKeywords){
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.articles = articles;
		this.topKeywords =  topKeywords;
	}
	
	Topic.build = function(data){
		return Topic(data.name, data.categories, data.artcles, data.topKeywords);
	}
	return Topic;
});