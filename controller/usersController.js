/**
 * Created by tostaky on 26/07/17.
 */

"use strict";

//DEPENDENCIES
const moment = require('moment');

//HANDLER
const formatToObject = require('./handler/formatToObject');
const formatToModel = require('./handler/formatToModel');

//QUERIES
const userQuery = require('./../model/users');

//MODULE
//----------------------------GET
function usersConstructor(req, res) {
    userQuery.getAll().then((done, err)=>{
        if(err) secure.error(err);
        res.render('usersPage', {client : req.session.client, users : done})
    })
}

function userConstructor(req, res){
    formatToObject.queryArticleObjectByOwner(req.params.id).then((done, err)=>{
        if(err) secure.error(err);
        res.render('userPage', {client : req.session.client, user : done[0], articles : done[1], moment : moment})
    })
}

function clientConstructor(req, res){
    let sess = req.session.client;

    userQuery.getClient(sess.userId).then((done, err)=>{
        if(err) secure.error(err);
        res.render('clientPage', {client : sess, user : done, moment: moment});
    });
}

//----------------------------POST
function userModelModificator(req, res){
    formatToModel.formatUpdateClient(req.body).then((done, err)=>{
        userQuery.update(req.session.client.userId, done).then((done, err)=>{
            res.redirect('/user/'+req.session.client.userId);
        });
    })
}

module.exports = {
    usersConstructor: usersConstructor,
    userConstructor: userConstructor,
    clientConstructor : clientConstructor,
    userModelModificator : userModelModificator
};