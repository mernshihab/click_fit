const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const uploadRoute = require("./src/routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.send(`Server is Running on port ${port}`);
});

app.use("/upload", uploadRoute);

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
