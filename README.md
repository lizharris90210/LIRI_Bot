# LIRI Bot

## Language Interpretation and Recognitition Interface

### Overview

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

### Technology Used

LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies. The app sends requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

- [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

- [Axios](https://www.npmjs.com/package/axios)

- [OMDB API](http://www.omdbapi.com)

- [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

- [Moment](https://www.npmjs.com/package/moment)

- [DotEnv](https://www.npmjs.com/package/dotenv)

### Useage

In terminal, type 'node liri.js' and one of the following commands, followed by a band, artist, or movie (ie. 'node liri.js movie-this scream'):

- `concert-this` (searches the Bands in Town Artist Events API for venue, location, and date)

concert-this.mov

- `spotify-this-song` (searches the Spotify Artists API for artist, song name, preview link, and album)

spotify-this.mov

- `movie-this` (searches OMDB API for movie information, including title, year, rating, Rotten Tomatoes rating, country of production, language, plot, and actors)

OMDBScreenRecord.mov

- `do-what-it-says` (uses fs Node package to run 'spotify-this-song' into file random.txt)

### Link

https://lizharris90210.github.io/LIRI_Bot/

### Credits

LIRI is a school project for UNC Coding Bootcamp, built by lizharris90210, with support and technical expertise of TAs, Stack Overflow, and API documentation.
