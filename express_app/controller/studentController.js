const Student = require("../models/student");


exports.addStudent=(req,res)=>{

    const student=new Student({
        name:req.body.name,
        age:req.body.age,
        note:req.body.note
    });
    student.save((err)=>{
        if(err){
            res.status(500).json({
                error:err
            });
        }else{
            res.status(200).json({
                message:"Student added successfully !"
            });
        }
    });
}

exports.getbyname = (req, res) => {
  Student.findOne({ name: req.params.name }, (err, student) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    if (!student) {
      res.status(404).json({
        message: "No student found !",
      });
    } else {
      res.status(200).json({
        student,
      });
    }
  });
};

exports.getAllStudentOver18 = (req, res) => {
  Student.find({ age: { $gt: 18 } }, (err, students) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    if (!students) {
      res.status(404).json({
        message: "No student found !",
      });
    } else {
      res.status(200).json({
        students,
      });
    }
  });
};

exports.getAllStudentOver10note = (req, res) => {
  Student.find({ note: { $gt: 10 } }, (err, students) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    if (!students) {
      res.status(404).json({
        message: "No student found !",
      });
    } else {
      res.status(200);
    }
  }).sort({ name: 1 });
};
