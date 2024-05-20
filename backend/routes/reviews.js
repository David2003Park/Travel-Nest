const express = require("express");
const { createReview } = require("./../controllers/reviewController.js");
const { userAuth } = require("../utils/verifyToken.js");

const router = express.Router();

router.post("/:tourId", userAuth, createReview);

module.exports = router;
