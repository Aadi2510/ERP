const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const saveController = require('../controller/saveData.controller.js')

router.post('/saveStudent',upload.single('image'), saveController.saveStudent)
router.post('/saveTeacher',upload.single('image'), saveController.saveTeacher)



module.exports = router