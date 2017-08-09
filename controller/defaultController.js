/**
 * Created by tostaky on 02/08/17.
 */

//QUERY
const queryUser = require('./../model/users');


//MODULE
//----------------------------GET

function indexConstructor(req, res){
    res.render('indexPage', { client:req.session.client })
}

function signinConstructor(req, res){
    res.render('signinPage', { client:req.session.client })
}

//----------------------------POST

function loginVerificator(req, res){
    let sess = req.session;

    let username = req.body.username;
    let password = req.body.password;


    queryUser.getUserOnConnection(username).then((done, err)=>{
        let user = done[0];

        if(!user || password != user.password){
            res.redirect('/');
        }else{
            sess.client = {
                userId : user.id,
                username : username,
                profilPic : user.profilPic,
                admin : user.admin
            };
            res.redirect('/articles');
        }
    })
}

module.exports = {
    indexConstructor : indexConstructor,
    signinConstructor : signinConstructor,
    loginVerificator : loginVerificator
};