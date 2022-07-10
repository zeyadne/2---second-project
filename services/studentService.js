const studentModel = require("../models/studentsModel");

// get all student
const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    studentModel.find({}, (err, students) => {
      if (err) {
        reject(err);
      } else {
        resolve(students);
      }
    });
  });
};

// get student by id
const getStudentByID = (id) => {
  return new Promise((resolve, reject) => {
    studentModel.findById(id, (err, student) => {
      if (err) {
        reject(err);
      } else {
        resolve(student);
      }
    });
  });
};

// Add student
const addStudent = (newStudent) => {
  return new Promise((resolve, reject) => {
    const student = new studentModel(newStudent);
    student.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("added successfully");
      }
    });
  });
};

// update student
const updateStudent = (id, updatedStudent) => {
  return new Promise((resolve, reject) => {
    studentModel.findByIdAndUpdate(id, updatedStudent, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("updated successfully");
      }
    });
  });
};

// delete student
const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    studentModel.findByIdAndRemove(id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("removed successfully");
      }
    });
  });
};

module.exports = {
  getAllStudents,
  getStudentByID,
  addStudent,
  updateStudent,
  deleteStudent,
};
