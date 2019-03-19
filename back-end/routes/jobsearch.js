const express = require("express");
const router = express.Router();
const axios = require('axios')

// const jobsAdzuna = 'https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=f2ae2d10&app_key=e4ae6f67ccd721f8ecab59d03822c56e&results_per_page=100&where=%22Canada%22&content-type=application/json'

const searchQuery = (q) => `https://api.adzuna.com:443/v1/api/jobs/ca/search/3?app_id=f2ae2d10&app_key=e4ae6f67ccd721f8ecab59d03822c56e&title_only=${q}&content-type=application/json`

// router 
// .route('/alljobs')
//   .get((req, res, next) => {
//     axios
//     .get(jobsAdzuna)
//     .then(response => {
//       res.json({
//         jobs:response.data.results
//       })
//     })
//   })

router
.route('/search')
  .get((req, res) => {
    const { q } = req.query
    console.log(q)
    axios
    .get(searchQuery(q))
    .then(response => {
      res.json({
        jobs:response.data.results
      })
    })
  })


module.exports = router



