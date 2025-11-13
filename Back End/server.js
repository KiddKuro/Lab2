// Import the Express framework for building the web server
import express from 'express';
const app = express(); // Initialize an Express application
const port = 3000;     // Define the port number for the server


// This allows requests from other origins 
import cors from 'cors';
app.use(cors());

// Import body-parser to handle incoming request bodies (form data and JSON)
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// ================================
// Database Connection (MongoDB with Mongoose)
// ================================

import mongoose from 'mongoose';

// Connect to MongoDB Atlas database using Mongoose
mongoose.connect('mongodb+srv://aasogu:Pass1Word2@cluster2025aaa.dmlbnqc.mongodb.net/?appName=Cluster2025AAA');

// Define the schema (structure) for movie documents
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Create a Mongoose model based on the schema
const movieModel = mongoose.model('Movie', movieSchema);

// POST route to add a new movie to the database
app.post('/api/movies', async (req, res) => {
  // Destructure data sent in the request body
  const { title, year, poster } = req.body;

  try {
    // Create a new movie document
    const newMovie = new movieModel({ title, year, poster });

    // Save the new movie to the MongoDB collection
    await newMovie.save();

    // Log and respond with success message
    console.log('Movie saved:', newMovie);
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  } catch (error) {
    console.error('Error saving movie:', error);
    res.status(500).json({ message: 'Failed to save movie', error });
  }
});

// Manually set CORS headers for all incoming requests (extra safety)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific headers
  next(); // Continue to the next middleware or route
});

// Simple GET route for testing server connection
app.get('/', (req, res) => {
  res.send('Hello'); // Respond with a simple text message
});

// GET route to return a static list of movies as JSON (for testing)
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

  // Send the movie list as JSON under the key "myArray"
  res.json({ myArray: myMovies });
});

// Listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
