// Update with your config setting.

module.exports = {

    test: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user:     'testData',
            password: 'testData123',
            database: 'private_network_database_test'
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
            user:     'privateNetwork',
            password: 'privateNetwork123',
            database: 'private_network_database'
        },
        migrations: {
            directory: __dirname + '/model/migrations'
        },
        seeds: {
            directory: __dirname + '/model/seeds/production'
        }
    }

};
