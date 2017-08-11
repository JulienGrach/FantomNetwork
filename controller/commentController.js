/**
 * Created by tostaky on 27/07/17.
 */
//NEEDS
const moment = require('moment');

//QUERIES & HANDLER
const commentQuery = require('./../model/comments');
const secure = require('./handler/secure');

//MODULE

function createCommentReception(req, res){
    let content = req.body.content;
    let userId = req.session.client.userId;
    let articleId = req.body.articleId;
    let reqRedirection = req.headers.referer;

    let comment = {
        content : content,
        date_publish : moment().toDate(),
        userId : userId,
        articleId : articleId
    };

    commentQuery.add(comment).then((done, err)=>{
        res.redirect(reqRedirection);
    });
}

module.exports = {
    createCommentReception : createCommentReception
};