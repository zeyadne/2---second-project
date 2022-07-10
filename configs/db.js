const mongoose = require("mongoose");
const connectDB = async () => {
  const uri = "mongodb://localhost:27017/studentsDB";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(uri, options);
  console.log("db conncted");
};
module.exports = connectDB;
