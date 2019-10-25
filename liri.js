// REQUIREMENTS
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var input = process.argv.slice(3).join(" ");


function switching() {
  switch (action) {
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
      doWhatItSays();
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


// BANDS IN TOWN CONCERTS
function concert() {
  if (!input) {
    input = "Celine Dion";
  }

  var query = `http://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;
  axios.get(query).then(BITResponse);
}

function BITResponse(response) {
  var date = moment(response.data[0]);
  var dateFormat = date.format("MM/DD/YYYY");

  if (response.data.length <= 0) {
    console.log ("No dates found");
  } else {
    console.log("Concerts for: " + input);
    for (var i = 0; i < response.data.length; i++) {
      var concertResults = `--------------------------\nVenue Name: ${response.data[i].venue.name} \nVenue Location: ${response.data[i].venue.city} \nDate of Event: ${dateFormat}\n------------------`;
      console.log(concertResults);
    }
  }
};

// SPOTIFY MUSIC
function spotifyData(error, response) {
  if (error) {
    console.log(error, "error");
    return;
  } else {
    console.log(
      `----------------------
    \nArtist: ${response.tracks.items[0].artists[0].name} 
    \nSong: ${response.tracks.items[0].name} 
    \nAlbum: ${response.tracks.items[0].album.name} 
    \nPreview Link: ${response.tracks.items[0].preview_url}
    \n----------------------`
    );
  }
};

function song() {
  if (!input) {
    input = "The Sign Ace of Base";
  }

  spotify.search({
    type: "track",
    query: input,
    limit: 1
  }, spotifyData);
}

// OMDB MOVIES
function movie() {
  if (!input) {
    input = "Mr Nobody";
  }

  var query = `http://omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`;
  axios.get(query).then(OMDBResults);
}

function OMDBResults(response) {
  var OMDBresponse = response.data;

  console.log("OMDB results for: " + input);
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
  fs.readFile("random.txt", "utf8", doingIt);
}

function doingIt(err, data) {
  if (err) throw err;
  console.log(data);
  switching();
  return;
}

function logging(input) {
  fs.appendFile("log.txt", data, error);
  console.log("logging to .txt");
}

