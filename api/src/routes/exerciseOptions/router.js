const { Router } = require('express')
const {showExerciseById, getAllExercises } = require('./controller')

// create a new Router instance
const router = new Router()

// define routes
router.get('/', getAllExercises)
router.get('/:id', showExerciseById)
router.post('/new', createNewReport)

// exporting router
module.exports = router