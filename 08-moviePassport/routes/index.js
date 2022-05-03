var express = require('express')
var router = express.Router()
const request = require('request')
const passport = require('passport')

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
  console.log('User info please!!')
  // console.log(req)
  console.log(req.user)
  console.log({ user: req.user })
  // const { username } = req.user
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('index', {
      parsedData: parsedData.results,
    })
  })
})

// router.get('/login', passport.authenticate('github'))
router.get('/login', passport.authenticate('github', { scope: ['user:email'] }))

router.get('/favorites', (req, res, next) => {
  res.json(req.user.displayName)
})

router.get(
  '/auth',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)

// router.get(
//   '/auth',
//   passport.authenticate('github', {
//     successRedirect: '/',
//     failureRedirect: '/loginFailed',
//   })
// )

router.get('/movie/:id', (req, res, next) => {
  // res.json(req.params.id)
  const movieId = req.params.id
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  // res.send(thisMovieUrl)
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('single-movie', {
      parsedData,
    })
  })
})

router.post('/search', (req, res, next) => {
  // res.send('sanity check')
  const userSearchTerm = encodeURI(req.body.movieSearch)
  const cat = req.body.cat
  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`
  // res.send(movieUrl)
  request.get(movieUrl, (error, response, movieData) => {
    let parsedData = JSON.parse(movieData)
    // res.json(parsedDate)
    if (cat === 'person') {
      parsedData.results = parsedData.results[0].known_for
    }
    res.render('index', {
      parsedData: parsedData.results,
    })
  })
})

module.exports = router
