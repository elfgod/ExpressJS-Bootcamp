const http = require('http')
// Read content of the file

// fs = file system module: fs is built into Node, see above
// fs gives node access to THIS computers file system
const fs = require('fs')

const server = http.createServer((req, res) => {
  // Inside the req object we have a URL property that contains the full URL
  console.log(req.url)
  if (req.url === '/') {
    // the user wants the home page!
    // we know, because the req object has / in the url
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.write('<h1>this is the home page</h1>')
    const homePageHTML = fs.readFileSync('03-node.html')
    // console.log(homePageHTML) // buffer
    res.write(homePageHTML) // Serving html from another file
    res.end()
    // Use case for our image request
  } else if (req.url === '/node.png') {
    res.writeHead(200, { 'content-type': 'image/png' })
    const image = fs.readFileSync('node.png')
    res.write(image)
    res.end()
    // Use case for our css request
  } else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    const css = fs.readFileSync('styles.css')
    res.write(css)
    res.end()
    // Use case for everything else
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write(`<h4>sorry, this isn't the page you're looking for!</h4>`)
    res.end()
  }
})

server.listen(3000)
