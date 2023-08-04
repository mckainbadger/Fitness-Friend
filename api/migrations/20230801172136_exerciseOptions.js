/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = function(knex) {
        return knex.schema.createTable('exerciseOptions', function(table) {
            table.increments('id').primary();
            table.string('bodyPart', 250).notNullable();
            table.string('equipment', 250).notNullable();
            table.string('gifUrl', 250).notNullable();
            table.string('name', 250).notNullable();
            table.string('target', 250).notNullable();
          })
        }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('exerciseOptions')
};
