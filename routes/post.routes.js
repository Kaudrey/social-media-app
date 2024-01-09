const express = require("express");
const { createPost } = require("../controllers/post.controller");
const authenticate = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/create", authenticate, createPost);

module.exports = router;
