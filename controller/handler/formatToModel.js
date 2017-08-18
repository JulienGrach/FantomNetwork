/**
 * Created by tostaky on 11/08/17.
 */

//DEPENDENCIES
const moment = require('moment');

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

function formatUpdateClient(body){
    return uploadFile(body.FILES).then((done, err)=>{
        delete body.repassword; //@todo delete it in the futur secure function
        delete body.FILES;

        let result = {};

        for(let key in done){
            result[key] = done[key];
        }

        for(let key in body){
            if(body[key]){
                result[key] = body[key];
            }
        }

        if(result.birthday){
            result.birthday = moment(result.birthday, "DD/MM/YY").toDate();
        }
        return result
    });
}

function formatAddClient(body){
    return uploadFile(body.FILES).then((done, err)=>{
        console.log(done);
        delete body.repassword; //@todo delete it in the futur secure function
        delete body.FILES;

        let result = {};

        for(let key in done){
            result[key] = done[key];
        }

        for(let key in body){
            if(body[key]){
                result[key] = body[key];
            }
        }
        return result;
    });
}

module.exports = {
    formatUpdatePost : formatUpdatePost,
    formatAddClient : formatAddClient,
    formatUpdateClient : formatUpdateClient
};