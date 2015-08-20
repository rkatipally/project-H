/**
 * Created by RKATIPALLY on 8/15/2015.
 */

angular.module("directives").directive("articleContent", function($log){
    return {
        restrict :  "AE",
        link : function(scope, ele, attrs){
            ele.addClass("article-content");
        }
    }
});
