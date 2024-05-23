const stuentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')

exports.saveStudent =  (req, res) => {
    let finalPass = new stuentModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        marks: req.body.marks,
        class: req.body.class,
        image: req.file.filename})
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}
exports.saveTeacher =  (req, res) => {
    let finalPass = new teacherModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        sallery: req.body.sallery,
        batches: req.body.batches,
        image: req.file.filename})
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}