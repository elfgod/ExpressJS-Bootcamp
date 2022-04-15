// http is native to NodeJS, We just have to ask for it
const http = require('http')

// the http module has a createServer method
// takes 1 arg:
// 1. callback, callback, has 2 arguments: request, response

const server = http.createServer((req, res) => {
  // huge log of the request
  // console.log(req)

  // res = out way of responding to the requester
  // http message
  // 1. start-line: check, done by node
  // 2. header
  // 3. body

  // writeHead takes 2 args:
  // 1. status code
  // 2. object for the mime-type

  // header
  res.writeHead(200, { 'content-type': 'text/html' })
  // body
  res.write('<h1>hello, world</h1>')
  res.end()
})

// createServer returns an object with a listen method
// listen takes 1 argument_
// 1. port to listen for http traffic on
server.listen(3000)
