/**
 * Created by tostaky on 21/07/17.
 */

"use strict";

const knex = require('./../controller/knex');

function users() {
    return knex('users');
}

// *** queries *** //

function getAll() {
    return users().select();
}

function getUser(userID) {
    return users().where('id', parseInt(userID)).first();
}

function getUsername(userID) {
    return users('username', 'urlImg').where('id', parseInt(userID)).first();
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
    getUsername: getUsername,
    add: add,
    update: update,
    deleteItem: deleteItem
};