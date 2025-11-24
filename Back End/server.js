import express from 'express';
const app = express();
const port = 3000;

// Enable cross-origin requests
import cors from 'cors';
app.use(cors());

// Parse incoming request bodies
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import mongoose from 'mongoose';

// Connect to MongoDB "test" database
mongoose
  .connect(
    'mongodb+srv://aasogu:Pass1Word2@cluster2025aaa.dmlbnqc.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Movie schema structure
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Movie model
const Movie = mongoose.model('Movie', movieSchema);

// Add a new movie
app.post('/api/movie', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

// Get all movies
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json({ myArray: movies });
});

// Get one movie by ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

// Update a movie by ID
app.put('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(movie);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
