const { Router } = require('express')

// import routes
const users = require('./users/router')
const exerciseOptions  = require('./exerciseOptions/router')
const myWorkouts = require('./myWorkouts/router')

// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/users', users)
allRouters.use('/exerciseOptions', exerciseOptions)
allRouters.use('/myWorkouts', myWorkouts)


// exporting router
module.exports = allRouters