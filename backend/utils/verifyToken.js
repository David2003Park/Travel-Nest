const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const authenticate = role => async (req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  //   check if token exist
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if user has the specified role
    const user = await User.findById(decoded.id);

    if (user.role !== role) {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorized" });
    }

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
// Middleware to authenticate admin access
adminAuth: authenticate("admin"),

// Middleware to authenticate patient access
userAuth: authenticate("user"),
}