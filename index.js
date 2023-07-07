// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server Started Successfully");
// });

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const todoRoutes = require("./Routers/todo");

app.use("/app/v1", todoRoutes);

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
  console.log("Server is started");
});
