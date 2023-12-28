const express = require('express')
const app = express()
const port = 3000
const jsonFile = require('./app.json')
const path = require('path');

app.set("views", path.join(__dirname, "views"));

app.set('view engine', 'ejs');

app.get('/',  async (req, res) => {
  res.render('home.ejs', {data: jsonFile})
})

app.listen(port, () => {
  console.log("app is listening...")
})