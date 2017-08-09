/**
 * Created by tostaky on 27/07/17.
 */

"use strict";

//NEEDS
const moment = require('moment');

//QUERIES
const articleQuery = require('./../model/articles');
const commentQuery = require('./../model/comments');

//HANDLER
const secure = require('./handler/secure');
const objectCreate = require('./handler/objectCreate');

//MODULE

//----------------------------GET
function articlesPageConstructor(req, res){
    objectCreate.queryArticlesObjects().then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlesPage', {client : req.session.client, articles : done, moment : moment})
    })
}

function articlePageConstructor(req, res){
    const idArticle = req.params.id;

    objectCreate.queryArticleObject(idArticle).then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlePage', {client : req.session.client, article : done, moment : moment})
    })
}

function createArticlePageConstructor(req, res){
    res.render('createPostPage', {client : req.session.client})
}


//----------------------------POST
function createArticleReception(req, res){
    let title = req.body.title;
    let content = req.body.content;
    let userId = req.session.client.userId;

    let article = {
        title : title,
        content : content,
        date_publish : moment().toDate(),
        userId : userId
    };

    articleQuery.add(article).then((done, err)=>{
        res.redirect('/articles');
    });
}

module.exports = {
    articlesPageConstructor: articlesPageConstructor,
    articlePageConstructor: articlePageConstructor,
    createArticlePageConstructor: createArticlePageConstructor,
    createArticleReception: createArticleReception
};

