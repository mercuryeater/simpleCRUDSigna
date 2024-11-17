const mongoose = require("mongoose");
const express = require("express");
const app = express();
const brandsRoute = require("./routes/brands.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/brands", brandsRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://federicoc03:treshold911@backendtestbrandregistr.3syi2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendTestBrandRegistry"
  )
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("Connection error", err));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
