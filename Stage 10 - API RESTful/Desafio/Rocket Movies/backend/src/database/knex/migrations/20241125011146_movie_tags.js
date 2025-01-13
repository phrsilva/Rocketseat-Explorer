exports.up = knex => knex.schema.createTable('movie_tags', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.integer('movie_id').notNullable().references('id').inTable('movie_scores');
    table.string('tags').notNullable();
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
    
});


exports.down = knex => knex.schema.dropTable('movie_tags');
