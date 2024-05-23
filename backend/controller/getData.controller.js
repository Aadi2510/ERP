const stuentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')

exports.getStudent =async (req, res)=>{
    let id = req.params.id
    let result = await stuentModel.find({_id:id})
    res.json(result)
}
exports.getTeaher =async (req, res)=>{
    let id = req.params.id
    let result = await teacherModel.find({_id:id})
    res.json(result)
}