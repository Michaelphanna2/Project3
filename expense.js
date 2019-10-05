var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExpenseSchema object
// This is similar to a Sequelize model
var ExpenseSchema = new Schema({
  // `expense` must be of type String
  // `expense` must be unique, the default mongoose error message is thrown if a duplicate value is given
  Expense: {
    type: String,
    unique: true
  },
  // `trips` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the trip model
  // This allows us to populate the Expense with any associated trips
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Expense = mongoose.model("Expense", ExpenseSchema);

// Export the Expense model
module.exports = Expense;
  