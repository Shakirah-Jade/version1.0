const express = require("express");
const { uploadFile, getFile } = require("../controllers/fileController");
const multer = require("multer");
const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory as Buffers
const upload = multer({ storage });

// Define an endpoint for file upload
// POST a new file
router.post("/upload", upload.single("file"), uploadFile);

// GET a file
router.get("/:id", getFile);

module.exports = router;
