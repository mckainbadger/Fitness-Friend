/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('exerciseDetails', function(table) {
        table.increments('id').primary();
        table.integer('workoutId').notNullable().references('id').inTable('workouts').onDelete('CASCADE');
        table.integer('exerciseWeight');
        table.integer('duration');
        table.integer('reps');
        table.integer('exerciseId').notNullable().references('id').inTable('exerciseOptions').onDelete('CASCADE');
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
    }


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('exerciseDetails')
};
