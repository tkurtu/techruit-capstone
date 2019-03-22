const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { NewUser } = require('../data/models');

router.use(bodyParser.json());

router
.route('/')
.post((req, res) => {
  const { 
    name, 
    email,
    company,
    occupation,
    location
  } = req.body;
  NewUser.create({
    name, 
    email,
    company,
    occupation,
    location
  })
    .then(response => {
      res.json(response);
    })
    .done();
});

module.exports = router;
