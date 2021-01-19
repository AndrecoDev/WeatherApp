const weatherController = require('express').Router();
const weatherService = require('../services/weather.services');


weatherController.get("/search", async function (req, res) {
    try {
        let cityInfo = await weatherService.getInfoByName(req.query);
        res.status(200).json(cityInfo)
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
})

weatherController.get("/cities", async function (req, res) {
    try {
        let cities = [];
        let city1 = await weatherService.getInfoByLatlong(-34.603722, -58.381592);
        cities.push(city1);
        let city2 = await weatherService.getInfoByLatlong(-33.459229, -70.645348);
        cities.push(city2);
        let city3 = await weatherService.getInfoByLatlong(40.730610, -73.935242);
        cities.push(city3);
        let city4 = await weatherService.getInfoByLatlong(33.8688, 151.2093);
        cities.push(city4);
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
})

module.exports = weatherController;