
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table){
        table.increments();
        table.string('content').notNullable();
        table.dateTime('date_publish').defaultTo(knex.fn.now());
        table.integer('userId').notNullable().unsigned();
        table.integer('articleId').notNullable().unsigned();

        table.foreign('userId').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
        table.foreign('articleId').references('articles.id').onDelete('CASCADE').onUpdate('CASCADE');
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
};
