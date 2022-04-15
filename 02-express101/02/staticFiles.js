const express = require('express')
const app = express()

// app comes with a use method
// use takes 1 arg (right now)
// 1. the middle ware you want to run
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'))

app.listen(3000)
console.log('The server is running on port 3000')
