/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    table.increments('id').primary();
    table.integer('userId').notNullable().references('users').inTable('workouts').onDelete('CASCADE');
    table.datetime('dateTime').notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now())
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('workouts')
};
