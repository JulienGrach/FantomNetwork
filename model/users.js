/**
 * Created by tostaky on 21/07/17.
 */

"use strict";

const knex = require('./knex');

function users() {
    return knex('users');
}

// *** queries *** //

function getAll() {
    return users().select('id', 'username', 'profilPic', 'coverPic', 'birthday', 'admin', 'activ').orderBy('username', 'desc');
}

function getUser(userID) {
    return users().select('id', 'username', 'profilPic', 'coverPic', 'introduce', 'birthday').where('id', parseInt(userID)).first();
}

function getClient(userID) {
    return users().select().where('id', parseInt(userID)).first();
}

function getUserOnConnection(username) {
    return users().select('id', 'profilPic', 'password', 'admin', 'activ').where('username', username);
}

function add(user) {
    return users().insert(user, 'id');
}

function update(userID, updates) {
    return users().where('id', parseInt(userID)).update(updates);
}

function deleteItem(userID) {
    return users().where('id', parseInt(userID)).del();
}


module.exports = {
    getAll: getAll,
    getUser: getUser,
    getClient: getClient,
    getUserOnConnection: getUserOnConnection,
    add: add,
    update: update,
    deleteItem: deleteItem
};