"use strict";

const env = require("../env.json");
const environment = env.ENV;
const config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);
