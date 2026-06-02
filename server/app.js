const express = require("express");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const userRoutes =
require("./routes/userRoutes");

const testRoutes =
require("./routes/test");

const transactionRoutes =
require("./routes/transactionRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/admin",adminRoutes);//admin

app.use("/api/test", testRoutes);

app.use(
  "/api/transaction",
  transactionRoutes
);

module.exports = app;