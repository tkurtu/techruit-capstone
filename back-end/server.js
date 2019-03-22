const express = require ('express');
const app = express ();
const cors = require('cors')
const PORT = process.argv[2] || process.env.PORT || 8080;
//require('dotenv').config()
const bodyParser = require("body-parser");
const jobSearch = require('./routes/jobsearch');
const recruitersRoutes = require("./routes/recruiters");
const freelancersRoutes = require("./routes/freelancers");


/*MIDDLEWARE*/
app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());

/*ROUTES*/
app.use("/search", jobSearch);
app.use("/recruiters", recruitersRoutes);
app.use("/freelancers", freelancersRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});


