/**
 * Created by tostaky on 27/07/17.
 */

//To Resolve Error
function error(err, response){
    console.warn(err);
    response.render('error', {error : err});
}

module.exports = {
    error : error
};