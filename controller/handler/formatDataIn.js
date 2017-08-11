/**
 * Created by tostaky on 11/08/17.
 */

//MODULE
function formatUpdatePost(body){
    let result = {};

    if("introduceModify" in body){
        result.introduce = body.introduceModify;
    }else{
        if("titleModify" in body){
            result.title = body._title;
        }
        if("contentModify" in body){
            result.content = body.contentModify;
        }
    }
    return result
}

module.exports = {
    formatUpdatePost : formatUpdatePost
};