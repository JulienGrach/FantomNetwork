"use strict";

const port = 8080;

//NEEDS
const express = require('express');
const app = express();
const ejs = require('ejs');

const session = require('express-session');

//CONTROLLERS
const userController = require('./controller/userController');
const articleController = require('./controller/articleController');
const commentController = require('./controller/commentController');
const defaultController = require('./controller/defaultController');

//SERVER
app.set('view engine', 'ejs')
    .use(express.static('public'))

    //ROUTES
    .get('/', defaultController.indexConstructor)
    .get('/signin', defaultController.signinConstructor)

    .get('/users', userController.usersPageConstructor)
    .get('/user/:id', userController.userPageConstructor)
    //.post()
    //.put()
    //.del()

    .get('/articles', articleController.articlesPageConstructor)
    .get('/article/:id', articleController.articlePageConstructor)
    //.get('/createArticle', articleController.createArticlePageConstructor)
    //.post()
    //.put()
    //.del()

     //PORT

    .listen(port);

module.exports = app;