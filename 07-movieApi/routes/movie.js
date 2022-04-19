var express = require('express')
var router = express.Router()

const movieDetails = require('../data/movieDetails')

/* GET movie page. */
// /movies/...
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

// GET /movie/movieId

// GET /movie/top_rated

// POST /movie/{movie_id}/rating

// DELETE /movie/{movie_id}/rating

module.exports = router
