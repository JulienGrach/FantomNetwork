/**
 * Created by tostaky on 31/07/17.
 */

$(function(){

    var articles = $('.article');

    function activEtc(obj){
        obj.each(function(i){
            var articleContent = $(this).find('.articleContent')[0];
            var articleNext = $(this).find('.articleNext');

            if(articleContent.scrollHeight > articleContent.clientHeight){
                articleNext.show();
            }else{
                articleNext.hide();
            }
        });
    }

    function deployArticle(obj) {
        obj.each(function () {
            var articleContent = $(this).find('.articleContent');
            var articleNext = $(this).find('.articleNext');
            var articleButton = $(this).find('.articleButton');
            var articleComment = $(this).find('.articleComments');
            var isArticleDeploy = false;

            articleButton.click(function () {
                if (!isArticleDeploy) {
                    articleNext.hide();
                    articleContent.css('max-height', '100%');
                    articleComment.show();
                    isArticleDeploy = true;
                } else {
                    articleContent.css('max-height', '30vh');
                    articleComment.hide();
                    activEtc(articles);
                    isArticleDeploy = false;
                }
            });
        });
    };

    activEtc(articles);
    deployArticle(articles);

    $(window).resize(function(){
        activEtc(articles);
    });



});




