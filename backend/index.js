const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const tourRoute = require("./routes/tours.js");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const reviewRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/bookings.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: "*",
};

// Log environment variables
console.log('Environment Variables:', process.env);

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB database connection failed:", err);
  }
};

connect();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log("Server listening on port", port);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
