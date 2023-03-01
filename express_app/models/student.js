const mongoose = require("mongoose");

studentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, 
    required: true,
  },
  age: Number,
  note: Number,
});

const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
