/**
 * Created by tostaky on 07/08/17.
 */
'use strict';

//QUERIES & HANDLER
const articleQuery = require('./../../model/articles');
const commentQuery = require('./../../model/comments');

const secure = require('./secure');

//ITSELF

function searchCommentsByArticles(comments, articles){
    let result = [];
    articles.forEach((data)=>{
        result.push(formatCommentsByArticle(comments, data));
    });
    return result
}

function formatCommentsByArticle(comments, article){
    article.comments = [];
    comments.forEach((dataComment)=>{
        if(article.id == dataComment.articleId){
            article.comments.push(dataComment);
        }
    });
    return article
}

//MODULE

function queryArticlesObjects(){
    let articles = articleQuery.getAll();
    let comments = commentQuery.getAll();

    return comments.then((doneComments, err) => {
        return articles.then((doneArticles, err)=>{
            return searchCommentsByArticles(doneComments, doneArticles);
        });
    });
}

function queryArticleObject(id){
    let article = articleQuery.getArticle(id);
    let comments = commentQuery.getAllByArticle(id);

    return comments.then((doneComment, err) => {
        return article.then((doneArticle, err)=>{
            return formatCommentsByArticle(doneComment, doneArticle);
        });
    })
}

module.exports = {
    queryArticlesObjects : queryArticlesObjects,
    queryArticleObject : queryArticleObject
};