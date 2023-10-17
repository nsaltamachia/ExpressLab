// Require modules
const express = require("express");
const path = require("path");

// Require the cars database
const carsDb = require("./data/cars-db");


// Create our express app
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount middleware (app.use)

// Mount routes
app.get("/", function (req, res) {
    res.send("<h1>Hello World?</h1>");
});

app.get("/cars", function (req, res) {
    res.render("cars/index", {
        cars: carsDb.getAll()
    })
});



// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log("Listening to port 3000");
})