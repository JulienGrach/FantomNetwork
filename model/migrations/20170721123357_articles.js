
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.dateTime('date_publish').defaultTo(knex.fn.now());
        table.integer('userId').notNullable().unsigned();

        table.foreign('userId').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles');
};
