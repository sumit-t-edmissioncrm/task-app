const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sumit:SoGZXc7uiqQEkMEi@cluster0.mie72.mongodb.net/task-app"
  )
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
