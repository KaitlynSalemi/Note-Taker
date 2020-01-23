// npm express
const express = require("express");

// local files 
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// server
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listen to the server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})

// nodemon server.js