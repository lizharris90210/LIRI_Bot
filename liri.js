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
var concert = " ";

// BANDS IN TOWN CONCERTS
function concert() {
  if (!command) {
    command = "Foo Fighters";
  }

  var query = `http://rest.bandsintown.com/artists/${command}/events?app_id=codingbootcamp`;
  axios.get(query).then(BITResponse);

  var date = moment(response.data[0]);
  var dateFormat = date.format("MM/DD/YYYY");

  console.log("Concerts for: " + referenceBand);
  var concertResults = `--------------------------\nVenue Name: ${BITResponse.data[i].venue.name} \nVenue Location: ${BITResponse.data[i].venue.city} \nDate of Event: ${dateFormat}\n------------------`;

  console.log(concertResults);
};

// SPOTIFY MUSIC
var spotifyfunc = function(error, data) {
  error;
  var spotifyData = `${data.tracks.items[0]}`;
  console.log("Spotifying: " + spotifyingData);
  console.log(
    `----------------------\nArtist: ${spotifyingData.tracks.items[i].artists[0].name} Song: ${spotifyingData.tracks.items[i].name} Album: ${spotifyingData.tracks.items[i].album.name} Preview Link: ${spotifyingData.tracks.items[i].preview_url}\n----------------------`
  );
};

function song() {
  if (!command) {
    command = "The Sign Ace of Base";
  };
}

spotify.search(
  {
    type: "track",
    query: command
  },
  spotifyfunc
);

function logging(data) {
  fs.appendFile("log.txt", data, error);
}

var error = function(error) {
  if (error) {
    console.log(`Error ${error}`);
  }
};

// OMDB MOVIES
function movie() {
  if (!command) {
    command = "Mr Nobody";
  };

  var query = `http://omdbapi.com/?t=${command}&y=&plot=short&apikey=trilogy`;
  axios.get(query).then(OMDBResults);
};

var OMDBResults = function(response) {
  error;
  var OMDBresponse = response.data;

  console.log("OMDB results for: " + command);
  console.log(`--------------------\n
        \nTitle: ${OMDBresponse.Title}\n 
        \nReleased: ${OMDBresponse.data.Year}\n 
        \nRotten Tomatoes Rating: ${OMDBresponse.data.Ratings[1].Value}\n 
        \nProduced in: ${OMDBresponse.data.Country}\n 
        \nPlot: ${OMDBresponse.data.Plot}\n 
        \nActors: ${OMDBresponse.data.Actors}\n
        \n-------------------------`);
};

// // DO WHAT IT SAYS
function doWhatItSays() {
  fs.readFile("random.text", "utf8", doingIt);
}

var doingIt = function(error, data) {

var dataSplit = data.split(",");
var input0 = input[0];
var input1 = input[1];

switch (input0) {
  case "concert-this":
    concert(input1);
    break;

  case "movie-this":
    movie(input1);
    break;

  case "spotify-this-song":
    song(input1);
    break;
}
};

function switching() {
  switch (arg) {
    case "concert-this":
      concert();
      break;

    case "spotify-this":
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
