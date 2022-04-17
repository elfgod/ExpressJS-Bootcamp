const express = require('express')
let router = express.Router()

// router.use works the same that app.use does
// but it's specific to THIS router
// router.use

// instead of:
// app.get(...)
// router.get(...)

router.get('/', (req, res, next) => {
  res.json({
    msg: 'Router works!',
  })
})

// router.all
// router.post
// router.put
// router.delete

module.exports = router
