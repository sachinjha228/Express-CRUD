let mongoose = require('mongoose');
let studentSchema = mongoose.Schema({
    studentId: Number,
    firstName: String,
    lastName: String,
    age:Number,
    dob:String,
    department:String
  }); 
  
let studentModel = mongoose.model("studentModel", studentSchema);

module.exports = studentModel;