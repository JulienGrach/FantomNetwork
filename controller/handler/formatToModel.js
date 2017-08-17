/**
 * Created by tostaky on 11/08/17.
 */

//HANDLER
const uploadFile = require('./uploadFiles');

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

function formatAddClient(body){
     return uploadFile(body.FILES, 'image', 'profilPic').then((done, err)=>{
         let result = {};

         result.username = body.username;
         result.password = body.password;
         result.mail = body.mail;
         result.profilPic = done;

         return result
     });
}

module.exports = {
    formatUpdatePost : formatUpdatePost,
    formatAddClient : formatAddClient
};