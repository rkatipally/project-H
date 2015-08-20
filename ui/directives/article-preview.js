/**
 * Created by RKATIPALLY on 8/15/2015.
 */

angular.module("directives").directive("articlePreview", function($log, topicSrvc){
    return {
        restrict : "AE",
        link : function(scope,ele,  attrs){
            ele.addClass("article-preview");

        }
    }
}).directive("articlePreviewList", function($log, topicSrvc, $compile){
    return {
        restrict : "AE",
        link : function(scope, ele, attrs){
            var topicName = scope["topic"];
            $log.info("inside artcile content -" , topicName);
            topicSrvc.getData(topicName).then(function(data){
                $log.info("http get resolved for preview data", data.articleData.articles);
                angular.forEach(data.articleData.articles, function(value, key){
                    var newEle = $compile("<article-preview><article-heading>" + value.heading + "</article-heading><article-content>"  + value.content + "</article-content><article-preview-footer>"  + value.commentsCnt +  value.keywords + "</article-preview-footer></article-preview>")(scope);
                    ele.append(newEle);

                })
            });
        },
        controller : articlePreviewListCntrl
    }
}).directive("articleHeading", function($log, $state){
    return {
        restrict :  "AE",
        link : function(scope, ele, attrs){
            ele.addClass("article-heading");
            ele.css("cursor", "pointer");
            ele.on("mouseover", function(){
                console.log("mouseenter");
                ele.css("text-decoration", "underline");


            });
            ele.on("mouseout", function(){
                $log.info("mouseleave");
                ele.css("text-decoration", "none");
            });

            ele.on("click", function(){
                $state.go("article-view", {"heading": ele.text()});
                console.log("heading clicked");
            });
        }
    }
}).directive("articlePreviewFooter", function($log){
    return {
        restrict :  "AE",
        link : function(scope, ele, attrs){
            ele.addClass("article-preview-footer");
        }
    }
})
;

function articlePreviewListCntrl($scope, $element){


}