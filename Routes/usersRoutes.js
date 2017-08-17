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
const usersController = require('../controller/usersController');

//ROUTER
router.get('/users', clientMiddleware.loginValidator, usersController.usersConstructor)
    .get('/user/:id', clientMiddleware.loginValidator, usersController.userConstructor)
    .get('/client', clientMiddleware.loginValidator, usersController.clientConstructor);
//.put('/client', clientMiddleware.loginValidator, usersController.userModelModificator)

module.exports = router;