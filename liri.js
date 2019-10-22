// REQUIREMENTS
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

var spotify = new Spotify(keys.spotify);
var arg = process.argv[2];
var command = process.argv.slice(3).join(" ");

var error = function(error) {
  if (error) {
    console.log(`Error ${error}`);
  }
};


// BANDS IN TOWN CONCERTS
function concert() {
  if (!command) {
    command = "Foo Fighters";
    console.log(concert, 'concert')
  }

  var query = `http://rest.bandsintown.com/artists/${command}/events?app_id=codingbootcamp`;
  axios
  .get(query)
  .then(BITResponse);

  var BITResponse = function(response) {
    error;
    var date = moment(response.data[0]);
    var dateFormat = date.format("MM/DD/YYYY");

    if (response.data.length <= 0) {
      list += '\nNo dates found'
    } else {
      for (var i = 0; i < response.data.length; i++) {
  console.log("Concerts for: " + command);
  var concertResults = `--------------------------\nVenue Name: ${response.data[i].venue.name} \nVenue Location: ${response.data[i].venue.city} \nDate of Event: ${dateFormat}\n------------------`;
        console.log(response.data)
  console.log(concertResults);
  }}
}}

// SPOTIFY MUSIC
var spotifyfunc = function(error, data) {
  if (error) {
    error;
    return;
  } 
  console.log(JSON.parse(JSON.stringify(response), null, 2))

  var spotifyData = `${response.tracks.items[0]}`;
  console.log("Spotifying: " + spotifyingData);
  console.log(
    `----------------------\nArtist: ${spotifyData.tracks.items[i].artists[0].name} Song: ${spotifyData.tracks.items[i].name} Album: ${spotifyData.tracks.items[i].album.name} Preview Link: ${spotifyData.tracks.items[i].preview_url}\n----------------------`
  );
};

function song() {
  console.log(command, "song function working");

  if (!command) {
    command = "The Sign Ace of Base";
  }
  spotify.search(
    {
      type: "track",
      query: command,
      limit: 1
    },

    function(error, data) {
      if (error) {
        console.log(error, "error");
      }
      console.log(data, "data");
    }
    // spotifyfunc()
  );
}

function logging(command) {
  fs.appendFile("log.txt", data, error);
  console.log('logging to .txt')
}


// OMDB MOVIES
function movie() {
  if (!command) {
    command = "Mr Nobody";
  }

  var query = `http://omdbapi.com/?t=${command}&y=&plot=short&apikey=trilogy`;
  axios.get(query).then(OMDBResults);
}

var OMDBResults = function(response) {
  error;
  var OMDBresponse = response.data;

  console.log("OMDB results for: " + command);
  console.log(`--------------------\n
        \nTitle: ${OMDBresponse.Title}\n 
        \nReleased: ${OMDBresponse.Year}\n 
        \nRotten Tomatoes Rating: ${OMDBresponse.Ratings[1].Value}\n 
        \nProduced in: ${OMDBresponse.Country}\n 
        \nPlot: ${OMDBresponse.Plot}\n 
        \nActors: ${OMDBresponse.Actors}\n
        \n-------------------------`);
};

// // DO WHAT IT SAYS
function doWhatItSays() {
  fs.readFile("random.text", "utf8", doingIt);
}

var doingIt = function(arg, command) {
  error;
  // var dataSplit = data.split(',');
  // var arg = input[0];
  // var command = input[1];

  switch (arg) {
    case "concert-this":
      concert(command);
      break;

    case "movie-this":
      movie(command);
      break;

    case "spotify-this-song":
      song(command);
      break;
  }
};
doWhatItSays();

function switching() {
  switch (arg) {

    case "concert-this":
      concert();
      break;

    case "spotify-this-song":
      song();
      break;

    case "movie-this":
      movie();
      break;

    case "do-what-it-says":
      doingIt();
      break;

    default:
      console.log(
      `\nPlease use commands:
      \nconcert-this
      \nspotify-this-song
      \nmovie-this
      \ndo-what-it-says\n`
      );
  }
}
switching();
