/**
 * Created by tostaky on 17/08/17.
 */

"use strict";


//DEPENDENCIES
const express = require('express');
const router = express.Router();

//CONTROLLERS
const publicsController = require('../controller/publicsController');

//ROUTER
router.get('/', publicsController.indexConstructor)
    .get('/signin', publicsController.signinConstructor)
    .get('/error', publicsController.errorConstructor)

    .post('/login', publicsController.clientSessionner)
    .post('/signin', publicsController.userModelAdder);

module.exports = router;

