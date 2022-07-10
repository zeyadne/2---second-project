const express = require("express");
const studentServices = require("../services/studentService");
const router = express.Router();

// get all students
router.route("/").get(async (requ, respo) => {
  try {
    const students = await studentServices.getAllStudents();
    return respo.json(students);
  } catch (err) {
    return respo.json(err);
  }
});

// get by id

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentServices.getStudentByID(id);
    return res.json(student);
  } catch (err) {
    return res.json(err);
  }
});

// add student
router.route("/").post(async (req, res) => {
  const student = req.body;
  console.log(student);
  try {
    const result = await studentServices.addStudent(student);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
});

// update student
router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const studentToUpdate = req.body;
    const result = await studentServices.updateStudent(id, studentToUpdate);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
});

// delete student
router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await studentServices.deleteStudent(id);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
