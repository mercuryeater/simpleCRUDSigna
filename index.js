const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const brandsRoute = require("./routes/brands.route.js");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

//routes
app.use("/api/brands", brandsRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@backendtestbrandregistr.3syi2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendTestBrandRegistry`
  )
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("Connection error", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
