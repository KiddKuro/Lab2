// Import the Express framework to create a web server
import express from 'express';
const app = express();
const port = 3000;

// Import and enable CORS to allow requests from other origins (e.g., frontend apps)
import cors from 'cors';
app.use(cors());

// Import body-parser to handle incoming request bodies (form data and JSON)
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// POST endpoint for adding or handling new movie data
app.post('/api/movies', (req, res) => {
  console.log(req.body); // Log the incoming request body to the console
  res.send('Post request to the movie endpoint'); // Send a confirmation response
});

// Global middleware to manually set CORS headers for all incoming requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all domains
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allowed headers
  next(); // Continue to the next middleware or route
});

// Basic GET route for testing that the server is running
app.get('/', (req, res) => {
  res.send('Hello'); // Respond with a simple message
});

// GET endpoint that returns a list of movies as JSON data
app.get('/api/movies', (req, res) => {
  const myMovies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  // Send the movie list as a JSON response under the key "myArray"
  res.json({ myArray: myMovies });
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log('Server is running on npm in'); // Log to confirm server startup
});
