/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockExerciseOptions = require("./data/mockExerciseOptions.json")
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exerciseOptions').del()
  await knex('exerciseOptions').insert(mockExerciseOptions);

};


