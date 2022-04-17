var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // Changing data in the HTTP header
  // const date = new Date(1969, 6, 20)
  // res.set('Date, date')
  // // This will prevent the browser from caching the response
  // res.set('Cache-Control', 'no-store')
  // res.set('Content-Type', 'text/plain')

  // fresh and stale
  // REQ, how old this thing is
  // fresh returns true if it's not stale, stale the opposite
  // console.log('req.fresh: ', req.fresh)
  // console.log('req.stale: ', req.stale)

  // Only accept the response format desired
  console.log(req.accepts('json'))
  console.log(req.accepts('html'))
  console.log(req.accepts(['json', 'html']))
  res.render('index', { title: 'Express' })
})

module.exports = router
