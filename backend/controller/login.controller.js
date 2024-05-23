const stuentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')

exports.login = async (req, res) => {
    const { email, password, loginType } = req.body;
      if (loginType === 'student') {
        const student = await stuentModel.findOne({ email, password });
        if (student) {
          res.json(student);
        } else {
          res.json(false);
        }
      } else if (loginType === 'teacher') {
        const teacher = await teacherModel.findOne({ email, password });
        if (teacher) {
          res.json(teacher);
        } else {
            res.json(false);
        }
      } else {
        res.json(false);
      }
   
  }