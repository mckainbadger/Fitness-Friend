const knex = require('../../knex.js')

//Get all exercises
exports.findMyWorkouts = async (id) => {
    const results = await knex('myWorkouts').select("*")
    return results
  }

  exports.addWorkout = async (data) => {
    const results = await knex('myWorkouts').insert(data)
    return results
  }