const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please add Name "],
  },
  email: {
    type: String,
    require: [true, "please add Email "],
  },
  phone: {
    type: Number,
    require: [true, "please add PhoneNumber "],
  },
  enroll: {
    type: Number,
    require: [true, "please add Enroll "],
  },
  admissionDate: {
    type: Date,
    // default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
