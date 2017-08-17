/**
 * Created by tostaky on 27/07/17.
 */

"use strict";

//DEPENDENCIES
const moment = require('moment');

//QUERIES
const articleQuery = require('./../model/articles');
const commentQuery = require('./../model/comments');
const userQuery = require('./../model/users');

//HANDLER
const secure = require('./handler/secure');
const formatToModel = require('./handler/formatToModel');
const formatToObject = require('./handler/formatToObject');


//MODULE
//----------------------------GET
function articlesConstructor(req, res){
    formatToObject.queryArticlesObjects().then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlesPage', {client : req.session.client, articles : done, moment : moment})
    })
}

function articleConstructor(req, res){
    const idArticle = req.params.id;

    formatToObject.queryArticleObject(idArticle).then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlePage', {client : req.session.client, article : done, moment : moment})
    })
}

function createArticleConstructor(req, res){
    res.render('createPostPage', {client : req.session.client})
}


//----------------------------POST
function articleAdder(req, res){
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


function commentAdder(req, res){
    let content = req.body.content;
    let userId = req.session.client.userId;
    let articleId = req.body.articleId;
    let reqRedirection = req.headers.referer;

    let comment = {
        content : content,
        date_publish : moment().toDate(),
        userId : userId,
        articleId : articleId
    };

    commentQuery.add(comment).then((done, err)=>{
        res.redirect(reqRedirection);
    });
}


//----------------------------DEL
function generalPostsDeletor(req, res){
    let queryType;
    let reqRedirection = req.headers.referer;

    switch(req.body._table){
        case 'article':
            queryType = articleQuery;
            if(reqRedirection.match(/\/article\//)) reqRedirection = '/articles';
            break;

        case 'comment':
            queryType = commentQuery;
            break;
    }

    queryType.deleteItem(req.body._id).then((done, err)=>{
        if(err) secure.error(err);
        res.redirect(reqRedirection);
    })
}


//----------------------------PUT
function generalPostsModificator(req, res){
    let queryType;
    let reqRedirection = req.headers.referer;
    let updates = formatToModel.formatUpdatePost(req.body);

    switch(req.body._table){
        case 'article':
            queryType = articleQuery;
            break;

        case 'comment':
            queryType = commentQuery;
            break;
        case 'user':
            queryType = userQuery;
    }

    queryType.update(req.body._id, updates).then((done, err)=>{
        if(err) secure.error(err);
        res.redirect(reqRedirection);
    })
}

module.exports = {
    articlesConstructor: articlesConstructor,
    articleConstructor: articleConstructor,
    createArticleConstructor: createArticleConstructor,
    articleAdder: articleAdder,
    generalPostsDeletor : generalPostsDeletor,
    generalPostsModificator : generalPostsModificator,
    commentAdder : commentAdder
};

