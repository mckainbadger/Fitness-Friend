/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockUsers = require("./data/mockUsers.json")
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(mockUsers);
};
