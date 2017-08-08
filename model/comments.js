/**
 * Created by tostaky on 21/07/17.
 */

"use strict";

const knex = require('./../controller/knex');

function comments() {
    return knex('comments');
}

// *** queries *** //

function getAll(){
    return comments().select('comments.*', 'users.username', 'users.profilPic').from('comments').leftJoin('users', function() {
        this.on('users.id', '=', 'comments.userId')
    });
}

function getAllByArticle(articleId) {
    return comments().select('comments.*', 'users.username', 'users.profilPic').from('comments').leftJoin('users', function() {
        this.on('users.id', '=', 'comments.userId');
    }).where('comments.articleId', '=', parseInt(articleId));
}

function getComment(commentId) {
    return comments().where('id', parseInt(commentId)).first();
}

function add(comment) {
    return comments().insert(comment, 'id');
}

function update(commentID, updates) {
    return comments().where('id', parseInt(commentID)).update(updates);
}

function deleteItem(commentID) {
    return comments().where('id', parseInt(commentID)).del();
}


module.exports = {
    getAll : getAll,
    getAllByArticle: getAllByArticle,
    getComment: getComment,
    add: add,
    update: update,
    deleteItem: deleteItem
};