const weatherController = require('./controllers/weather.controller');
const app = require('express').Router();

app.use("/", weatherController);

module.exports = app;