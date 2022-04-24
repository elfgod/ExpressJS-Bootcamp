var express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()

const movieDetails = require('../data/movieDetails')

router.param('movieId', (req, res, next) => {
  // if only certain apiKeys are allowed to hit movieId
  // update the db with analytics data
  console.log('Someone hit a route that used the movieId wildcard')
  next()
})

/* GET movie page. */
// /movies/...

// GET /movie/top_rated
router.get('/top_rated', (req, res, next) => {
  let page = req.query.page
  if (!page) {
    page = 1
  }
  const results = movieDetails.sort((a, b) => {
    return b.vote_average - a.vote_average
  })
  const indexToStart = (page - 1) * 20
  res.json(results.slice(indexToStart, indexToStart + 20))
})

// GET /movie/movieId
// This one needs to come last of all /ONETHING
router.get('/:movieId', (req, res, next) => {
  const movieId = req.params.movieId
  const results = movieDetails.find((movie) => {
    console.log(movie.id, '======', movieId)
    // return movie.id == movieId
    return movie.id == Number(movieId)
  })
  // console.log(results)
  if (!results) {
    res.json({
      msg: 'Movie ID is not found',
      production_companies: [],
    })
  } else {
    res.json(results)
  }
})

// POST /movie/{movie_id}/rating
router.post('/:movieId/rating', (req, res, next) => {
  const movieId = req.params.movieId
  // console.log(req.get('content-type'))
  if (!req.is('application/json')) {
    res.json({ msg: 'Content type must be application/json' })
  } else {
    res.json('test')
  }
})

// DELETE /movie/{movie_id}/rating

module.exports = router
