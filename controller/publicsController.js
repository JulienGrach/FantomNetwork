/**
 * Created by tostaky on 02/08/17.
 */

"use strict";

//DEPENDENCIES
const mail = require('./../mails');

//HANDLER
const secure = require('./handler/secure');
const formatToModel = require('./handler/formatToModel');

//QUERY
const queryUsers = require('./../model/users');

//MODULE
//----------------------------GET
function indexConstructor(req, res){
    res.render('indexPage', { client:req.session.client })
}

function signinConstructor(req, res){
    res.render('signinPage', { client:req.session.client })
}

function errorConstructor(req, res){
    console.log(req.body); //@TODO Test this
    res.render('error', {client : req.session.client, error : req.body.error})
}


//----------------------------POST
function clientSessionner(req, res) {
    let sess = req.session;

    let username = req.body.username;
    let password = req.body.password;


    queryUsers.getUserOnConnection(username).then((done, err) => {
        if(err) secure.error(err);
        let user = done[0];

        if (!user || password != user.password || user.activ == 0) {
            res.redirect('/');
        } else {
            sess.client = {
                userId: user.id,
                username: username,
                profilPic: user.profilPic,
                admin: user.admin
            };
            res.redirect('/articles');
        }
    })
}

function userModelAdder(req, res){
    formatToModel.formatAddClient(req.body).then((doneFormat, err)=>{
        queryUsers.add(doneFormat).then((doneQuery, err)=>{
            mail.newInscription(doneFormat);
            res.redirect('/');
        })
    });
}


module.exports = {
    indexConstructor : indexConstructor,
    signinConstructor : signinConstructor,
    errorConstructor : errorConstructor,

    clientSessionner : clientSessionner,
    userModelAdder : userModelAdder
};