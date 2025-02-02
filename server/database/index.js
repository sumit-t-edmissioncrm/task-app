const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
