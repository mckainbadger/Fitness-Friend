const knex = require('../../knex.js')


exports.addNewWorkout = async (newWorkout) => {
    const createdWorkout = await knex('workouts').insert(newWorkout)
    return createdWorkout
  }

  exports.findWorkoutByUserId = async (userId) => {
    const results = await knex('workouts').select("*").where('userId', userId)
    return results
  }

  exports.findAllWorkouts = async () => {
    const workouts = await knex('workouts').select("*")
    console.log('workouts ', workouts)
  
    return reports
  }