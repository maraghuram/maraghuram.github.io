$(document).ready(function(){
    $("#recentArticleHeader").hover(function(){
        $("#articleDescriptionId").css("text-decoration", "underline");
    }, function(){
        $("#articleDescriptionId").css("text-decoration", "none");
    });
});