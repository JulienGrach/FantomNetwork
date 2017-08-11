/**
 * Created by tostaky on 02/08/17.
 */

//QUERY
const queryUser = require('./../model/users');
const queryArticle = require('./../model/articles');
const queryComment = require('./../model/comments');

const secure = require('./handler/secure');

//HANDLER
const formatDataIn = require('./handler/formatDataIn');

//MODULE
//----------------------------GET

function indexConstructor(req, res){
    res.render('indexPage', { client:req.session.client })
}

function signinConstructor(req, res){
    res.render('signinPage', { client:req.session.client })
}

function errorConstructor(req, res){
    res.render('error', {client : req.session.client, error : 'error'})
}

//----------------------------POST

function loginVerificator(req, res) {
    let sess = req.session;

    let username = req.body.username;
    let password = req.body.password;


    queryUser.getUserOnConnection(username).then((done, err) => {
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

//----------------------------DEL

function generalPostsDeletor(req, res){
    let queryType;
    let reqRedirection = req.headers.referer;

    switch(req.body._table){
        case 'article':
            queryType = queryArticle;
            if(reqRedirection.match(/\/article\//)) reqRedirection = '/articles';
            break;

        case 'comment':
            queryType = queryComment;
            reqRedirection = '/article/'+req.body._articleId;
            break;
    }

    queryType.deleteItem(req.body._id).then((done, err)=>{
        if(err) secure.error(err);
        res.redirect(reqRedirection);
    })
}


//----------------------------PUT

function generalPostsModificator(req, res){
    let queryType;
    let reqRedirection = req.headers.referer;
    let updates = formatDataIn.formatUpdatePost(req.body);

    switch(req.body._table){
        case 'article':
            queryType = queryArticle;
            break;

        case 'comment':
            queryType = queryComment;
            break;
    }

    queryType.update(req.body._id, updates).then((done, err)=>{
        if(err) secure.error(err);
        res.redirect(reqRedirection);
    })
}

module.exports = {
    indexConstructor : indexConstructor,
    signinConstructor : signinConstructor,
    errorConstructor : errorConstructor,
    loginVerificator : loginVerificator,
    generalPostsDeletor : generalPostsDeletor,
    generalPostsModificator : generalPostsModificator
};