var express = require('express')
var router = express.Router()
const request = require('request')

// https://www.themoviedb.org/settings/api

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=a815f91370f6b9d9047429e73b0a1b6c

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODE1ZjkxMzcwZjZiOWQ5MDQ3NDI5ZTczYjBhMWI2YyIsInN1YiI6IjYyNWM5OTJhMjI5YWUyMTljOTI3ZTIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-zCnkD9iywgwTT7hqrSVvl4sGRi8wCYgK0jMnxRCW4

// API Key (v3 auth)
const apiKey = 'a815f91370f6b9d9047429e73b0a1b6c'

const apiBaseUrl = 'http://api.themoviedb.org/3'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  // request.get takes 2 args:
  // 1. it takes the URL to http "get"
  // 2. the callback to run when done. 3 args:
  //   1. error (if any)
  //   2. http response
  //   3. json/data the server sent back
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // console.log('=====The error')
    // console.log(error)
    // console.log('=====The response=====')
    // console.log(response)
    // console.log('=====movieData=====')
    // console.log(movieData)
    const parsedData = JSON.parse(movieData)
    // console.log(parsedData)
    // res.json(parsedData)
    res.render('index', {
      parsedData: parsedData.results,
    })
  })
})

module.exports = router
