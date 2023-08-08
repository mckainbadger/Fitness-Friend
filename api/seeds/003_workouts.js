/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockWorkouts = require("./data/mockWorkouts.json")
exports.seed = async function(knex) {
  await knex('workouts').del()
  await knex('workouts').insert([mockWorkouts]);
};
