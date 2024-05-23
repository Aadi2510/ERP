const express = require('express');
const router = express.Router();


const getDataControllers = require('../controller/getData.controller.js')


router.get('/getTeacher/:id', getDataControllers.getTeaher)
router.get('/getStudent/:id', getDataControllers.getStudent)




module.exports = router