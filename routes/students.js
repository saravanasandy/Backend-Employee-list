const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

// Get all Students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, data: students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// Get Single Student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json({ success: true, data: student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// create Single Student
router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    enroll: req.body.enroll,
  });

  try {
    const savedStudent = await student.save();
    res.json({ success: true, data: savedStudent });
    console.log(savedStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// update Single Student
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          enroll: req.body.enroll,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// Delete Single Student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

module.exports = router;
