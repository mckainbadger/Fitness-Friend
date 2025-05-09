const knex = require('../../knex.js')
const bcrypt = require('bcrypt')

exports.findAllUsers = async () => {
  const results = await knex('users').select("*")
  // console.log('results: ', results)

  return results
}

exports.showUserById = async (id) => {

  const user = await knex('users')
    .where('id', id)
    .first('*')
    
  console.log('user: ', user)

  return user
}

exports.insertUser = async (data) => {
  console.log('data: ', data)

  const createdUser = await knex('users')
    .insert(data)
    .returning(['id', 'firstName', 'lastName', 'email'])
  console.log('createdUser: ', createdUser)
  return createdUser
}

exports.createUser = async (userData) => {

  const {username, password} = userData

  // Hash the password with 10 rounds of salt
  const hash = await bcrypt.hash(password, 10)
  
  // delete plaintext password
  delete userData.password

  // Insert the user into the database and return
  return await knex('users').insert({
    ...userData,
    username: username,
    passwordHash: hash //store the hash. DO NOT store a plaintext password!
  }).returning(['id', 'username', 'role']) // return the data you need excluding the password
}

exports.findByUsername = async (username) => {
  // Find the first user in the database with the username
const user = await knex('users')
  .where('username', username)
  .first('*')
return user
}