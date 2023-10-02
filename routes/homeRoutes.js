const express = require('express');
const router = express.Router();
const HomeControllersClass = require('../controllers/homeControllers')


router.get('/', HomeControllersClass.index);
router.get('/about', HomeControllersClass.about);



module.exports= router