/**
 * Created by tostaky on 09/08/17.
 */

function loginValidator(req, res, next){
    if(!req.session.client){
        res.redirect('/')
    }else{
        next();
    }
}

function ownerValidator(req, res, next){
    if(req.body._owner != req.session.client.userId && req.session.client.admin != 1){
        res.redirect('/');
    }else{
        next();
    }
}

module.exports = {
    loginValidator : loginValidator,
    ownerValidator : ownerValidator
};