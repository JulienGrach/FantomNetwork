"use strict";

const port = 8080;

//NEEDS
const express = require('express');
const app = express();
const ejs = require('ejs');

const bodyParser = require('body-parser');
const session = require('express-session');

//CONTROLLERS
const userController = require('./controller/userController');
const articleController = require('./controller/articleController');
const commentController = require('./controller/commentController');
const defaultController = require('./controller/defaultController');

//MIDDLEWARES

const loginValidator = require('./controller/middleware/clientMiddleware');

//SERVER
app.set('view engine', 'ejs')
    .use(express.static('public'))
    .use(session({
        cookie: { maxAge : 600000},//expiration de connection
        rolling: true,//Reset l'expiration pour chaque res
        secret: 'FantomNetwork secret cookie',//signature du cookie de session ?
        resave: false,
        saveUninitialized: true
        }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    //ROUTES
    .get('/', defaultController.indexConstructor)
    .get('/signin', defaultController.signinConstructor)
    .post('/login', defaultController.loginVerificator)
    .post('/createUser', defaultController.createUserReception)


    .get('/users', loginValidator, userController.usersPageConstructor)
    .get('/user/:id', loginValidator, userController.userPageConstructor)
    //.put()
    //.del()

    .get('/articles', loginValidator, articleController.articlesPageConstructor)
    .get('/article/:id', loginValidator, articleController.articlePageConstructor)
    .get('/createArticle', loginValidator, articleController.createArticlePageConstructor)
    .post('/createArticle', loginValidator, articleController.createArticleReception)
    //.put()
    //.del()

    .post('/createComment', loginValidator, commentController.createCommentReception)

     //PORT

    .listen(port);

module.exports = app;