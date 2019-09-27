<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

function searchCountry                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         (country) {
  
      // Querying the bandsintown api for the selected country, the ?app_id parameter is required, but can equal anything
      var queryURL = "https://www.travel-advisory.info/api";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
  
        // Printing the entire object to console
        console.log("Response", response);

      });

    }
  
        // Constructing HTML containing the country information
        var iso_alpha2 = $("<h1>").text(response.iso_alpha2);
        var name = $("<h1>").text(response.data.name);
        var continent = $("<p>").text(response.data.continent);
        var advisory = [
            $("<p>").text(response.data.advisory),
            $("<p>").text(response.data.score),
            $("<sources_active>").text(response.data.sources_active),
            $("<message>").text(response.data.message),
            $("<updated>").text(response.data.updated),
            $("<source>").text(response.data.source),

            ]
        
  
        // Empty the contents of the country-div, append the new country content
        $("#country-div").empty();
        $("#country-div").append(iso_alpha2, name, continent, advisory);

  
    // Event handler for user clicking the select-country button
    $("#select-country").on("click", function(event) {
      // Preventing the button from trying to submit the form
      event.preventDefault();
      // Storing the country name
      var inputCountry = $("#country-input").val().trim();
  
      // Running the searchBandsInTown function(passing in the country as an argument)
      searchCountry(inputCountry);
    
    });
