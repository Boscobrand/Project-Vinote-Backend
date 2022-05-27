const express = require("express");
// const dotenv = require("dotenv").config()
// const mongoose = require('mongoose')
const cors = require('cors');
const app = express();


app.use(require("./routes/api-route.js"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'))
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// app.set("port", process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
