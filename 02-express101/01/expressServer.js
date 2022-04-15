// NodeJS is the language
// Express is node, a node module

// http is a native module
// const http = require('http')

// express is a 3rd party module
const express = require('express')
// an "app" is the express function (createApplication) inside
// the Express module invoked and is an Express application
const app = express()

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('*', (req, res) => {
  // Express handles the basic headers (status connected, mime-type)! Awesome!
  res.send(`<h1>this is the home page</h1>`)
  // Express handles the end! Awesome!
})

app.listen(3000)
console.log('The server is running on port 3000')
