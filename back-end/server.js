const express = require ('express');
const app = express ();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
//require('dotenv').config()
const bodyParser = require("body-parser");
const jobSearch = require('./routes/jobsearch');

/*MIDDLEWARE*/
app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());

/*ROUTES*/
app.use("/search", jobSearch);

app.listen(PORT, () => {
  console.log('Listening on Port 8080...')
})


