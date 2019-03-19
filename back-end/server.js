const express = require ('express');
const app = express ();
const cors = require('cors')
const PORT = process.env.PORT || 8085;
//require('dotenv').config()
const bodyParser = require("body-parser");
const jobSearch = require('./routes/jobsearch');

/*MIDDLEWARE*/
app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());

/*ROUTES*/
app.use("/", jobSearch);

app.listen(8085, () => {
  console.log('Listening on Port 8085...')
})


