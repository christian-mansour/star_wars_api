var request = require('request');
var prompt = require('prompt');
var open = require('open');

//   * CLI prints welcome message

console.log("Welcome to the ultimate Star Wars experience! We are about to take you to a galaxy far, far away...");
console.log("Choose the corresponding number of your favorite Star Wars character from the list below:");

var charArray = ['Luke Skywalker',' Yoda',' Darth Vader',' Princess Leia',' Chewbacca',' BB8',' R2D2',' Boba Fett',' Darth Maul',' Palpatine']

console.log(charArray.toString());

//   * CLI prompts the user for input

  prompt.start();
  prompt.get(['characterName'], function(err, result) {
  //   * CLI makes a simple call to *X* API using the user input
    console.log('You picked ' + result.characterName + '!');
    console.log('Here is a gif of ' + result.characterName + ', Enjoy!');
    request('http://api.giphy.com/v1/gifs/search?q=' + result.characterName.toLowerCase() + 's&api_key=dc6zaTOxFJmzC', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var response = JSON.parse(body);
          var responseArr = response.data;
          // console.log(responseArr[0].url);
          open(responseArr[0].url);
        }
        setTimeout(function themeSong(){
          open('https://www.youtube.com/watch?v=ZXQha5X81RA');
          }, 3000)
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
