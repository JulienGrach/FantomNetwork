/**
 * Created by tostaky on 07/08/17.
 */
'use strict';

//QUERIES & HANDLER
const userQuery = require('./../../model/users');
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

function formatArticleByUser(articles, user){
    articles.forEach((article)=>{
        article.username = user.username;
        article.profilPic = user.profilPic;
    });
    return articles
}

//MODULE

function queryArticlesObjects(){
    let articles = articleQuery.getAll();
    let comments = commentQuery.getAll();

    return comments.then((doneComments, err) => {
        if(err)secure.error(err);
        return articles.then((doneArticles, err)=>{
            if(err)secure.error(err);
            return searchCommentsByArticles(doneComments, doneArticles);
        });
    });
}

function queryArticleObject(id){
    let article = articleQuery.getArticle(id);
    let comments = commentQuery.getAllByArticle(id);

    return comments.then((doneComment, err) => {
        if(err)secure.error(err);
        return article.then((doneArticle, err)=>{
            if(err)secure.error(err);
            return formatCommentsByArticle(doneComment, doneArticle);
        });
    })
}

function queryArticleObjectByOwner(userId){
    let article = articleQuery.getAllByOwner(userId);
    let user = userQuery.getUser(userId);
    let comments = commentQuery.getAll();

    let articleObject = comments.then((doneComments, err) => {
        if(err)secure.error(err);
        return article.then((doneArticles, err)=>{
            if(err)secure.error(err);
            return searchCommentsByArticles(doneComments, doneArticles);
        });
    }).then((doneArticleObject)=>{
        return user.then((doneUser)=>{
            return formatArticleByUser(doneArticleObject, doneUser)
        })
    });

    return Promise.all([user, articleObject])
}

module.exports = {
    queryArticlesObjects : queryArticlesObjects,
    queryArticleObject : queryArticleObject,
    queryArticleObjectByOwner : queryArticleObjectByOwner
};