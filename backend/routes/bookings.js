const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBooking,
} = require("../controllers/bookingController.js");

const { adminAuth, userAuth } = require("../utils/verifyToken.js");

const router = express.Router();

router.post("/", userAuth, createBooking);
router.get("/:id", userAuth, getBooking);
router.get("/", adminAuth, getAllBooking);

module.exports = router;
