var express = require('express')
var router = express.Router()

const movieDetails = require('../data/movieDetails')

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

// DELETE /movie/{movie_id}/rating

module.exports = router
