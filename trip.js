var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new TripSchema object
// This is similar to a Sequelize model
var TripSchema = new Schema({
  // `trip` must be of type String
  // `trip` must be unique, the default mongoose error message is thrown if a duplicate value is given
  trip: {
    type: String,
    unique: true
  },
  // `trips` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the trip model
  // This allows us to populate the trip with any associated trips
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense"
    }
  ]
});

var Trip = mongoose.model("Trip", TripSchema);

// Export the Trip model
module.exports = Trip;