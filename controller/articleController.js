/**
 * Created by tostaky on 27/07/17.
 */

"use strict";

//NEEDS
const bodyParser = require('body-parser');
const moment = require('moment');

//QUERIES & HANDLER
const articleQuery = require('./../model/articles');
const commentQuery = require('./../model/comments');

const secure = require('./handler/secure');
const objectCreate = require('./handler/objectCreate');

//MODULE
function articlesPageConstructor(req, res){
    objectCreate.queryArticlesObjects().then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlesPage', {client : false, articles : done, moment : moment})
    })
}

function articlePageConstructor(req, res){
    const idArticle = req.params.id;

    objectCreate.queryArticleObject(idArticle).then((done, err)=>{
        if(err) secure.error(err);
        res.render('articlePage', {client : false, article : done, moment : moment})
    })
}

function createArticlePageConstructor(req, res){

}

module.exports = {
    articlesPageConstructor: articlesPageConstructor,
    articlePageConstructor: articlePageConstructor,
    createArticlePageConstructor: createArticlePageConstructor
};

