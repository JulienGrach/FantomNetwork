
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.string('mail').unique().notNullable();
        table.string('profilPic');
        table.string('coverPic');
        table.string('introduce');
        table.dateTime('birthday');
        table.boolean('admin').notNullable().defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
