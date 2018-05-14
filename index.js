// Import libs
const grapql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const users = require('./schema')

// Initialize express app
const app = express()

// Set route, schema to use, and pretty response
app.use('/user', graphqlHTTP({ schema: users, pretty: true }))

// Start http server
app.listen(3000, ()=>console.log('Server is running.'))