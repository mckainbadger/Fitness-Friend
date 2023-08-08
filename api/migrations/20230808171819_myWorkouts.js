/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("myWorkouts", function (table) {
    table.increments("id").primary();
    table.string("bodyPart");
    table.string("duration");
    table.string("exercise");
    table.string("exerciseWeight");
    table.string("reps");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("myWorkouts");
};
