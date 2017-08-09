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

module.exports = loginValidator;