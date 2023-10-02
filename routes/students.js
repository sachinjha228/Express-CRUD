var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/student.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Student Route Works');
});

router.get('/add', function(req, res, next) {
  let newStudent = new studentModel({
    studentId: 1,
    firstName: 'sachin',
    lastName: 'jha',
    age:26,
    dob:'26-06-1997',
    department:'Engineering'
  })

  newStudent.save()
    .then(function (newStudent) {
      res.send({status:200, message:"Student added successfully", studentObj:newStudent})
    })
    .catch(function (err) {
      res.send(err);
    });
      
  });


module.exports = router;