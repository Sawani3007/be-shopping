const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sawanisaxena:sawani3007@cluster0.aposb1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "day17",
    }
  )
  .then(() => {
    console.log("------ DB connected ------");
  })
  .catch((err) => {
    console.log("----- DB connection error -----");
    console.log(err.message);
    console.log("----- ----------------- -----");
  });
