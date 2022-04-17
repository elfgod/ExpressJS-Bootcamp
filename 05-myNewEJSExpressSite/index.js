var express = require('express')
var router = express.Router()

/* GET home page. */

// Changing the Date in the HTTP header
router.get('/', function (req, res, next) {
  const date = new Date(1969, 6, 20)
  res.set('Date', date)
  res.set('Content-Type', 'text/plain')
  res.render('index', { title: 'Express' })
})

module.exports = router
