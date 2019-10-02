var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true });

// When the server starts, create and save a new Trip document to the db
// The "unique" rule in the Trip model's schema will prevent duplicate Trips from being added to the server
db.Trip.create({ name: "Barcelona, Spain " })
  .then(function(dbTrip) {
    console.log(dbTrip);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// Routes

// Route for retrieving all Expenses from the db
app.get("/Expenses", function(req, res) {
  // Find all Expenses
  db.Expense.find({})
    .then(function(dbExpense) {
      // If all Expenses are successfully found, send them back to the client
      res.json(dbExpense);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for retrieving all Trips from the db
app.get("/Trips", function(req, res) {
  // Find all Trips
  db.Trip.find({})
    .then(function(dbTrip) {
      // If all Trips are successfully found, send them back to the client
      res.json(dbTrip);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for saving a new Expense to the db and associating it with a Trip
app.post("/submit", function(req, res) {
  // Create a new Expense in the db
  db.Expense.create(req.body)
    .then(function(dbExpense) {
      // If a Expense was created successfully, find one Trip (there's only one) and push the new Expense's _id to the Trip's `Expenses` array
      // { new: true } tells the query that we want it to return the updated Trip -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Expense.findOneAndUpdate({$push:{trips: dbTrip._id}}, { $push: { Expenses: dbExpense._id } }, { new: true });
    })
    .then(function(dbTrip) {
      // If the Trip was updated successfully, send it back to the client
      res.json(dbTrip);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

app.post("/submit", function(req, res) {
  // Create a new Expense in the db
  db.Expense.create(req.body)
    .then(function(dbExpense) {
      // If a Expense was created successfully, find one Trip (there's only one) and push the new Expense's _id to the Trip's `Expenses` array
      // { new: true } tells the query that we want it to return the updated Trip -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Trip.findOneAndUpdate({}, { $push: { Trip: dbTrip._id } }, { new: true });
    })
    .then(function(dbExpense) {
      // If the Trip was updated successfully, send it back to the client
      res.json(dbExpense);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


// Route to get all Trip's and populate them with their Expenses
app.get("/Trip", function(req, res) {
  // Find all Trips
  db.Trip.find({})
    // Specify that we want to populate the retrieved Trips with any associated Expenses
    .populate("trip")
    .then(function(dbTrip) {
      // If able to successfully find and associate all Trips and Expenses, send them back to the client
      res.json(dbTrip);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});