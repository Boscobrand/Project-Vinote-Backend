require('dotenv').config();
const express = require("express");
// const mongoose = require('mongoose')
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  allowedHeaders: ["*"],
  credentials: true,  
  optionSuccessStatus: 200,
}

const app = express();


app.use(require("./routes/api-route.js"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'))
app.use(cors(corsOptions));


app.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // next();
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});



// app.set("port", process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.PORT || 5001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });