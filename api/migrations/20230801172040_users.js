/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username', 50).unique().notNullable();
        table.string('email', 150).unique().notNullable();
        table.string('password', 72).notNullable();
        table.string('firstname', 50).notNullable();
        table.string('lastname', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
    }
    
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
