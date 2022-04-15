const path = require('path')
const express = require('express')
const app = express()

console.log(path)
app.use(express.static(__dirname + '/public'))

// app.all('*', (req, res) => {
//   res.send(`<h1>this is the home page</h1>`)
// })

// If app.all / don't run, then app.all * will kick in
// ExpressJS runs code in order from top to bottom
app.all('/', (req, res) => {
  // res.send(`<h1>this is the home page</h1>`)
  // read in Node.html
  console.log(path.join(__dirname + '/node.html'))
  res.sendFile(path.join(__dirname + '/node.html'))
})

app.all('*', (req, res) => {
  res.send('<h1>Sorry, this page dos not exist</h1>')
})

app.listen(3000)
console.log('The server is running on port 3000')
