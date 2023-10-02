const express = require('express');
const router = express.Router();
const HomeControllersClass = require('../controllers/homeControllers')


router.get('/', HomeControllersClass.index)



module.exports= router