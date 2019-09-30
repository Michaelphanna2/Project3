const axios = require('axios');

axios.get('https://www.travel-advisory.info/api')
  .then(response => {
    // console.log(response.data);
    console.log(response.data)

  })
  .catch(error => {
    console.log(error);

    // // var $ = cheerio.load(res.data);

    // // var countries = [];

    // // $(".searchCountry").each(function(i, element){

    // // // function countrySearch () {
    // //   // Constructing HTML containing the country information
    // //   var countryCode = $("<p>").text(data.iso_alpha2);
    // //   var name = $("<h2>").text(data.name);
    // //   var continent = $("<h2>").text(data.continent);
    // //   var advisory = [
    // //       score = data.score,
    // //       sources_active = data.sources_active,
    // //       message = data.message,
    // //       updated = data.updated,
    // //       source = data.source
    // //     ]


    // //   // Empty the contents of the artist-div, append the new artist content
    // //   $("#country-div").empty();
    // //   $("#country-div").append(countryCode, name, continent, advisory);
    // })
  
  });






// function searchCountries(country) {

//     axios.get('https://www.travel-advisory.info/api')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });


//  // Event handler for user clicking the select-artist button
//   $(".go").on("click", function(event) {
//     // Preventing the button from trying to submit the form
//     event.preventDefault();

//     // Running the searchBandsInTown function(passing in the artist as an argument)
//     searchCountries();
//   });
//   console.log(response);
// }
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    // var queryURL = "https://www.travel-advisory.info/api";
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {

      // Printing the entire object to console
      

//     })
// }

// const getCountries = () => {
//   try {
//     return axios.get('https://www.travel-advisory.info/api')
//   } catch (error) {
//     console.error(error)
//   }
// }

// const countCountries = async () => {
//   const countries = getCountries()
//     .then(response => {
//       if (response.data.message) {
//         console.log(
//           `Got ${Object.entries(response.data.message).length} countries`
//         )
//       }
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// countCountries();