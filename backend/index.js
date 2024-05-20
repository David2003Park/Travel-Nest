const  express = require("express");
const  dotenv = require("dotenv");
const  mongoose = require("mongoose");
const  cors = require("cors");
const  cookieParser = require("cookie-parser");
const  path = require("path");
const  tourRoute = require("./routes/tours.js");
const  userRoute = require("./routes/users.js");
const  authRoute = require("./routes/auth.js");
const  reviewRoute = require("./routes/reviews.js");
const  bookingRoute = require("./routes/bookings.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: "*",
};

// Log environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://davidpark:merntourbooking@cluster0.ycdvuuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log('MONGO_URI:', process.env.MONGO_URI);

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB database connection failed:", err);
  }
};

// middleware
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
}

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
