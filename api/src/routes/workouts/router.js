const { Router } = require('express')
const { index } = require('./controller')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', index)
router.post('/new', createNewReport)
// exporting router
module.exports = router