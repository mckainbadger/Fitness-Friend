const { Router } = require('express')
const { getMyWorkouts, createNewWorkout } = require('./controller')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', getMyWorkouts)
router.post('/new', createNewWorkout)
// exporting router
module.exports = router