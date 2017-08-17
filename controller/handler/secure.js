/**
 * Created by tostaky on 27/07/17.
 */

//To Resolve Error
function error(req, res, err){
    console.warn(err);
    req.body.error = err;

    res.redirect('error');
}

module.exports = {
    error : error
};