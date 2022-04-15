const express = require('express')
const app = express()

// app object has a few methods:
// HTTP verbs! REST verbs!
// CRUD app cooresponence
// default for all browsers is GET
// 1. GET - READ
// 2. POST - CREATE
// 3. DELETE - DELETE
// 4. PUT - UPDATE
// 5. ALL - i will accept any method

// Take 2 args:
// 1. path
// 2. callback to run if an HTTP request that matchs THIS verb
// is made to the path #1

// app.all('/', (req, res) => {
//   res.send(`<h1>welcome to the home page</h1>`)
// })

app.get('/', (req, res) => {
  // console.log(req)
  //   route: Route { path: '/', stack: [ [Layer] ], methods:
  // { get: true } },
  console.log(req.route)
  res.send(`<h1>welcome to the home GET page</h1>`)
})

app.post('/', (req, res) => {
  console.log(req.route)
  res.send(`<h1>welcome to the home POST page</h1>`)
})

app.delete('/', (req, res) => {})

app.put('/', (req, res) => {})

app.listen(3000)
console.log('The server is running on port 3000')
