const path = require('path');
const express = require('express')
require('./db/mongoose');

const userRouter = require('./routers/userRouter');
const wineRouter = require('./routers/wineRouter');

const app = express

app.use =express();

app.use(express.json());
app.use(userRouter);
app.use(wineRouter);

// static files in task-manager/client/build
app.use(express.static(path.join(__dirname, '/../client/build')));

app.length('*',(req,res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));

});

module.exports = app;