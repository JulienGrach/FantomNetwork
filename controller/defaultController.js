/**
 * Created by tostaky on 02/08/17.
 */

function indexConstructor(req, res){
    res.render('indexPage', { client:false })
}

function signinConstructor(req, res){
    res.render('signinPage', { client:false })
}

module.exports = {
    indexConstructor : indexConstructor,
    signinConstructor : signinConstructor
};