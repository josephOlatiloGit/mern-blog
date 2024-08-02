const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')

const blogRouter = require("./route/blog-route");

/**TO connect the DB */
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Path to access the blogRouter:
app.use("/api/blog", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("Running on port 5000...");
});
