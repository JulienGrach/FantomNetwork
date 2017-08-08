/**
 * Created by tostaky on 26/07/17.
 */
"use strict";

//NEEDS
const bodyParser = require('body-parser');

//QUERIES & HANDLER
const userQuery = require('./../model/users');
const articleQuery = require('./../model/articles');
const secure = require('./handler/secure');

//MODULE
function UsersPageConstructor(req, res) {
}

function UserPageConstructor(req, res){

}

module.exports = {
    UsersPageConstructor: UsersPageConstructor,
    UserPageConstructor: UserPageConstructor
};