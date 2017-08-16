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
            result.title = body.titleModify;
        }
        if("contentModify" in body){
            result.content = body.contentModify;
        }
    }
    return result
}

function formatUpdateClient(body, client){
    let result = {};
}

module.exports = {
    formatUpdatePost : formatUpdatePost
};