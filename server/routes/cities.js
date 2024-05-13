const express = require('express');
const router = express.Router();

const CityController = require('../Controllers/CityController');
const controller = new CityController()

router.post("/", controller.saveCity);
router.get("/", controller.getAllCities);
router.patch("/:id", controller.changeCity);
router.delete("/:id", controller.deleteCity);


module.exports = router;


