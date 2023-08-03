const knex = require('../../knex.js')

//Get all exercises
exports.findAllExercises = async (id) => {
    const results = await knex('exerciseOptions').select("*")
    // console.log('exercises ', results)
    return results
  }

  exports.findExerciseById = async (id) => {
    const results = await knex('exerciseOptions').select("*").where('id', id)
    // console.log("exercises", results)
    return results
  }