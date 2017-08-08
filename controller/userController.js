/**
 * Created by tostaky on 26/07/17.
 */
"use strict";

//NEEDS
const bodyParser = require('body-parser');
const moment = require('moment');

//QUERIES & HANDLER
const userQuery = require('./../model/users');
const articleQuery = require('./../model/articles');

const secure = require('./handler/secure');
const objectCreate = require('./handler/objectCreate');

//MODULE
function usersPageConstructor(req, res) {
    userQuery.getAll().then((done, err)=>{
        if(err){secure.error(err)}
        res.render('usersPage', {client : false, users : done})
    })
}

function userPageConstructor(req, res){
    objectCreate.queryArticleObjectByOwner(req.params.id).then((done, err)=>{
        if(err){secure.error(err)}
        console.log(done[0]);
        console.log(done[1]);
        res.render('userPage', {client : false, user : done[0], articles : done[1], moment : moment})
    })

}

module.exports = {
    usersPageConstructor: usersPageConstructor,
    userPageConstructor: userPageConstructor
};