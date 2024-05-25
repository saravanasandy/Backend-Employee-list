const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const studentsRouter = require("./routes/students");
app.use("/api/students", studentsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
