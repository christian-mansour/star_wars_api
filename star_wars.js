var request = require('request');
var prompt = require('prompt');
var open = require('open');

//   * CLI prints welcome message

console.log("Welcome to the ultimate Star Wars experience! We are about to take you to a galaxy far, far away...")

//   * CLI prompts the user for input

 prompt.start();
  prompt.get(['characterName'], function(err, result) {
  //   * CLI makes a simple call to *X* API using the user input
    console.log('You picked ' + result.characterName + '!');
    console.log('Here are some giphy\'s with that character.  Pick one!');
    request('http://api.giphy.com/v1/gifs/search?q=' + result.characterName.toLowerCase() + 's&api_key=dc6zaTOxFJmzC', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var response = JSON.parse(body);
          var responseArr = response.data;
          // console.log(responseArr[0].url);
          open(responseArr[0].url);
        }
      });
  });




    // Find Giphy URL for Star Wars giphys

      // request('http://api.giphy.com/v1/gifs/search?q=star+wars&api_key=dc6zaTOxFJmzC', function (error, response, body) {
      //   if (!error && response.statusCode == 200) {
      //     response = JSON.parse(body);
      //     console.log(response);
      //   }
      // });



//   * CLI outputs results


// EXTRA FEATURES:
// --include the opening star wars theme
