const express = require("express");
const app = express();

app.use(express.static("UI"));
app.use(express.static("src"));
app.use(express.static("spec"));
app.use(express.static("css"));

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
