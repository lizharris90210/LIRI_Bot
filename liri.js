// REQUIREMENTS
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
var reference = [];
var arg = process.argv;
var command = process.argv[2];
var theSong = "";
var theMovie = "";
var theBand = "";
var fileName = "log.txt";
var fullCommand = [];

for (var i = 3; i< arg.length; i++) {
  reference.push(arg[1])
}

var referenceBand = reference.join("");
fullCommand.push(command);
if(reference.length !=0) {
  fullCommand.push(referenceBand);
}

function logValue(value) {
  fs.appendFile(fileName, ',' + value, function(err) {
    if (err) {
    return console.log("Error: " + err);
    }
  })
}
logValue(fullCommand);

if (command === 'concert-this') {
  concert(referenceBand);
} else if (command === 'spotify-this-song') {
  spotifySong(reference);
} else if (command === 'movie-this') {
  movie(reference);
} else if (command === 'do-what-it-says') {
  doWhatItSays();
}

function concert(referenceBand) {
  var BITURL = "http://rest.bandsintown.com/artists/" + referenceBand + "events?app_id=codingbootcamp";
  axios
  .get(BITURL)
  .then(function(BITResponse) {
    console.log("");
    console.log("Retrieving Artist Data for: " + referenceBand)
      for (var i = 0; i < BITResponse.data.length; i++) {
        var dateTime = BITResponse.data[i].dateTime;
        var dateArray = dateTime.split('T');
        var concertResults = "--------------------------" +
        "\nVenue Name: " + BITResponse.data[i].venue.name +
        "\nVenue Location: " + BITResponse.data[i].venue.city +
        "\nDate of Event: " + moment(dateArray[0], "YYYY-DD-MM").format('DD-MM-YYYY');
        
        console.log(concertResults),

        function(err, data) {
          if (err) {
            return console.log("Error: " + err);
          }
    
      }
  };
  });

  function SpotifyAPISearch(reference) {
    if (reference.length === 0) {
      reference = "I want it that way";
    }
    spotify.search(
      {
        type: "track",
        query: reference
      },

      then(function(response) {
          console.log("");
          console.log("Spotifying " + reference);
          console.log("------------------------------");
            for (var i = 0; i < 5; i++) {
              var spotifyResults = 
              "\nArtist: " + response.tracks.items[i].artists[0].name + 
              "\nSong: " + response.tracks.items[i].name +
              "\nAlbum: " + response.tracks.items[i].album.name +
              "\nPreview Link: " + response.tracks.items[i].preview_url;

              console.log(spotifyResults)
            }
            
      function(err, data) {
        if (err) {
          return console.log("Error: " + err);
        }
      }
    })
  }
  
  function movie(reference) {
    if (reference.length === 0) {
      reference = "Mr Nobody";
    }
  axios
    .get('http://omdbapi.com/?t=' + reference + '&apikey=trilogy`)
    .then(function(response) {
      var rottenTomatoes = response.data.Ratings[1]
      console.log
      console.log("");
      console.log(`Title: ${movie.data.Title}`);
      console.log(`Released: ${movie.data.Year}`);
      console.log(`IMDB Rating: ${movie.data.Ratings[0].Value}`);
      console.log(`Rotten Tomatoes Rating: ${movie.data.Ratings[1].Value}`);
      console.log(`Produced in: ${movie.data.Country}`);
      console.log(`Plot: ${movie.data.Plot}`);
      console.log(`Starring: ${movie.data.Actors}`);
    })
    .catch(function(err) {
      console.log(err);
    });
}
};