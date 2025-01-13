
exports.up = knex => knex.schema.createTable('movie_scores', table => {
    table.increments('id').primary();
    table.varchar('name').notNullable();
    table.varchar('description').notNullable();
    table.integer('score').notNullable()
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
    
});
  



exports.down = knex => knex.schema.dropTable('movie_scores');