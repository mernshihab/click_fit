const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload_images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), uploadImage);

module.exports = router;
