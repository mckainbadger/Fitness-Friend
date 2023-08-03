const { Router } = require('express')
const {showExerciseById, getAllExercises } = require('./controller')

// create a new Router instance
const router = new Router()

// define routes
router.get('/', getAllExercises)
router.get('/:id', showExerciseById)

// exporting router
module.exports = router