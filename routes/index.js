const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const vacantsController = require('../controllers/vacantsController')

module.exports = () => {
    router.get('/', homeController.showWorks)

    //# Create Vacants
    router.get('/vacants/new', vacantsController.formNewVacant)

    return router;
}