const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const app = express();
const studentController = require("./controllers/studentController");
const axios = require("axios");
const router = require("./controllers/studentController");

connectDB();

//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentController);

app.listen(8000, () => {
  console.log("listening to requests");
});

//students page

// get the students info
// const studentsArr = router.get("http://localhost:6000/students");
// console.log(studentsArr);
// const controller = new AbortController();
// axios
//   .get("http://localhost:6000/students", {
//     signal: controller.signal,
//   })
//   .then(function (response) {
//     console.log(response);
//   });
