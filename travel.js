// Dependencies
var express = require("express");
var mongodb = require("mongodb");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

var app = express();

// A GET route for scraping the echoJS website
app.get("/travel", function(req, res) {
    // First, we grab the body of the html with axios
    axios.get("https://www.travel-advisory.info/api/").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("iso_alpha2").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
  
        // Create a new Article using the `result` object built from scraping
        db.Countries.create(result)
          .then(function(dbCountries) {
            // View the added result in the console
            console.log(dbCountries);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });
      })
      
    })
});
    

    