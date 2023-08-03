const { Router } = require('express')

// import routes
const root = require('./root/router')
const users = require('./users/router')
const exerciseOptions  = require('./exerciseOptions/router')

// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/', root)
allRouters.use('/users', users)
allRouters.use('/exerciseOptions', exerciseOptions)


// exporting router
module.exports = allRouters