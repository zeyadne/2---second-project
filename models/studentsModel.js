const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  FullName: String,
  Email: String,
  Faculty: String,
  Birthdate: Date,
  Exams: Array,
});
module.exports = mongoose.model("student", studentSchema);
