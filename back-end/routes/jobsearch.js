const express = require("express");
const router = express.Router();
const axios = require('axios')

const searchQuery = (q) => `https://api.adzuna.com:443/v1/api/jobs/ca/search/3?app_id=f2ae2d10&app_key=e4ae6f67ccd721f8ecab59d03822c56e&title_only=${q}&content-type=application/json`

router
.route('/')
  .get((req, res) => {
    console.log(req.query.title_only)
    axios
    .get(searchQuery(req.query.title_only))
    .then(response => {
      res.json({
        jobs:response.data
      })
    })
  })


module.exports = router