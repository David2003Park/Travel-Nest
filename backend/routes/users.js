const express = require("express");
const {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController.js");
const router = express.Router();

const { adminAuth, userAuth } = require("../utils/verifyToken.js");

// update  user
router.put("/:id", userAuth, updateUser);

// delete user
router.delete("/:id", adminAuth, deleteUser);

// get single user
router.get("/:id", userAuth, getSingleUser);

// get all users
router.get("/", adminAuth, getAllUser);

module.exports = router;
