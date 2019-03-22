const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs-extra')
const cors = require('cors');
const freelancers = require('../jsonFiles/freelancers');

router.use(cors());
router.use(bodyParser.json());
router.use(express.static('public'));

router
  .route('/')
  .get((req, res) => {
    res.json(freelancers)
  })

module.exports = router;