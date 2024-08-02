const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => console.log("connected to mongo db"))
  .catch((e) => console.log(e));
// console