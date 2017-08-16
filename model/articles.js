/**
 * Created by tostaky on 21/07/17.
 */

"use strict";

const knex = require('./knex');

function articles() {
    return knex('articles');
}

// *** queries *** //

function getAll() {
    return articles().select('articles.*', 'users.username', 'users.profilPic').from('articles').orderBy('date_publish', 'desc').leftJoin('users', function() {
        this.on('users.id', '=', 'articles.userId')
    });
}

function getAllByOwner(userID){
    return articles().select().where('articles.userId', parseInt(userID)).orderBy('date_publish', 'desc');
}

function getArticle(articleID) {
    return articles().select('articles.*', 'users.username', 'users.profilPic').where('articles.id', parseInt(articleID)).first().leftJoin('users', function() {
        this.on('users.id', '=', 'articles.userId')
    });
}

function add(article) {
    return articles().insert(article, 'id');
}

function update(articleID, updates) {
    return articles().where('id', parseInt(articleID)).update(updates);
}

function deleteItem(articleID) {
    return articles().where('id', parseInt(articleID)).del();
}


module.exports = {
    getAll: getAll,
    getAllByOwner: getAllByOwner,
    getArticle: getArticle,
    add: add,
    update: update,
    deleteItem: deleteItem
};