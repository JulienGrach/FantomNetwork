/**
 * Created by tostaky on 17/08/17.
 */

"use strict";


//DEPENDENCIES
const express = require('express');
const router = express.Router();

//MIDDLEWARES
const clientMiddleware = require('../controller/middleware/clientMiddleware');

//CONTROLLERS
const postsController = require('../controller/postsController');


router.get('/articles', clientMiddleware.loginValidator, postsController.articlesConstructor)
    .get('/article/:id', clientMiddleware.loginValidator, postsController.articleConstructor)
    .get('/createArticle', clientMiddleware.loginValidator, postsController.createArticleConstructor)
    .post('/createArticle', clientMiddleware.loginValidator, postsController.articleAdder)
    .post('/createComment', clientMiddleware.loginValidator, postsController.commentAdder)

    .delete('/posts', clientMiddleware.ownerValidator, postsController.generalPostsDeletor)
    .put('/posts', clientMiddleware.ownerValidator, postsController.generalPostsModificator);

module.exports = router;