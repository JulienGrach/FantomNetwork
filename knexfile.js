// Update with your config setting.

//CONFIG
const env = require('./env.json');

module.exports = {

    test: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user:     env.DATABASE.user,
            password: env.DATABASE.pass,
            database: env.DATABASE.testBase
        },
        migrations: {
            directory: __dirname + '/model/migrations'
        },
        seeds: {
            directory: __dirname + '/model/seeds/test'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user:     env.DATABASE.user,
            password: env.DATABASE.pass,
            database: env.DATABASE.base
        },
        migrations: {
            directory: __dirname + '/model/migrations'
        },
        seeds: {
            directory: __dirname + '/model/seeds/production'
        }
    }

};
