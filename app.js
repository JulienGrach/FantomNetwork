"use strict";

const port = 8080;

//NEEDS
const express = require('express');
const app = express();
const ejs = require('ejs');

const methodOverride = require ('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');

//CONTROLLERS
const userController = require('./controller/userController');
const articleController = require('./controller/articleController');
const commentController = require('./controller/commentController');
const defaultController = require('./controller/defaultController');

//MIDDLEWARES MODULES
const loginValidator = require('./controller/middleware/clientMiddleware');

//CONFIGURATION SERVER
app.set('view engine', 'ejs');

//MIDDELWARES AUTOMATIC
app.use(express.static('public'))
    .use(session({
        cookie: { maxAge : 600000},//expiration de connection
        rolling: true,//Reset l'expiration pour chaque res
        secret: 'FantomNetwork secret cookie',//signature du cookie de session ?
        resave: false,
        saveUninitialized: true
        }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .use(methodOverride(function (req, res) {
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                let method = req.body._method;
                delete req.body._method;
                return method
            }
        })
    );

//ROUTES SERVER
app.get('/', defaultController.indexConstructor)
    .get('/signin', defaultController.signinConstructor)
    .get('/error', defaultController.errorConstructor)
    .post('/login', defaultController.loginVerificator)
    // .post('/createUser', defaultController.createUserReception)


    .get('/users', loginValidator, userController.usersPageConstructor)
    .get('/user/:id', loginValidator, userController.userPageConstructor)
    .get('/client', loginValidator, userController.clientPageConstructor)
    //.put()
    //.del()

    .get('/articles', loginValidator, articleController.articlesPageConstructor)
    .get('/article/:id', loginValidator, articleController.articlePageConstructor)
    .get('/createArticle', loginValidator, articleController.createArticlePageConstructor)
    .post('/createArticle', loginValidator, articleController.createArticleReception)
    //.put()
    //.del()

    .post('/createComment', loginValidator, commentController.createCommentReception);

//PORT SERVER
app.listen(port);

