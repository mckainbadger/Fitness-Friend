require("dotenv").config()
const { findMyWorkouts, addWorkout} = require("./service")

exports.getMyWorkouts = async (req, res) => {
    try {
      // Only allow admins and account owners to access the user data
      const foundWorkouts = await findMyWorkouts()
  
      if (!foundWorkouts) {
        return res.status(404).json("No Workouts Found")
      }
  
      return res.json(foundWorkouts)
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
  exports.createNewWorkout = async (req, res) => {
    try {
      // Only allow admins and account owners to access the user data
      const createdWorkout = await addWorkout(req.body)
      return res.json(createdWorkout)
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
