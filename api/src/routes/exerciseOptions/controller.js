require("dotenv").config()
const { findAllExercises, findExerciseById} = require("./service")

exports.getAllExercises = async (req, res) => {
    try {
      // Only allow admins and account owners to access the user data
      const foundExercises = await findAllExercises()
  
      if (!foundExercises) {
        return res.status(404).json("No User Found")
      }
  
      return res.json(foundExercises)
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }

  exports.showExerciseById = async (req, res) => {
    try {
      // Only allow admins and account owners to access the user data
      const foundExercise = await findExerciseById(req.params.id)
  
      if (!foundExercise) {
        return res.status(404).json("No User Found")
      }
  
      return res.json(foundExercise)
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }