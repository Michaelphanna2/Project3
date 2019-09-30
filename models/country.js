const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({

    countryID: { type: String, required: true, unique: true },
    name: { type: String },
    continent: { type: [String], required: true},
    advisory: { type: Object, required: true },
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;