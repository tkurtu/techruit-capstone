const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs-extra')
const cors = require('cors');
const recruiters = require('../jsonFiles/')

/*MIDDLEWARE*/
router.use(cors());
router.use(bodyParser.json());
router.use(express.static('public'));




module.exports = router;

