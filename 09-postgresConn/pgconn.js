const express = require('express')
const app = express()

const PoolClass = require('pg').Pool
const pool = new PoolClass({
  user: 'postgres',
  host: 'localhost',
  database: 'weatherTiler_development',
  port: 5432,
  passport: '',
})

app.get('/', (req, res) => {
  const query = 'SELECT * FROM city_weathers WHERE id > $1'
  const scaryDataFromInternet = 36

  pool.query(query, [scaryDataFromInternet], (error, dbResponse) => {
    console.log(dbResponse)
    console.log(dbResponse.rows)
    res.json(dbResponse)
    res.json(dbResponse.rows)
  })
  pool.end()
})

app.listen(3000)
