/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = function(knex) {
        return knex.schema.createTable('exerciseOptions', function(table) {
            table.increments('id').primary();
            table.string('bodyPart', 50).unique().notNullable();
            table.string('equipment', 50).notNullable();
            table.string('gifUrl', 250).notNullable();
            table.string('name', 50).notNullable();
            table.string('target', 50).notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now())
          })
        }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('exerciseOptions')
};
