import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Allowe cross origin requests
app.use(cors());
//Paste URL-encoded  form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//JSON request bodies
app.use(express.static(path.join(__dirname, "../dist")));


mongoose
  .connect(
    'mongodb+srv://aasogu:Pass1Word2@cluster2025aaa.dmlbnqc.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

const Movie = mongoose.model('Movie', movieSchema);



// Add movie
app.post('/api/movie', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

// Delete movie
app.delete('/api/movie/:id', async (req, res) => {
  console.log('Deleting movie with id:', req.params.id);
  const movie = await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Movie deleted successfully', movie: movie });
});

// Get all movies
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json({ myArray: movies });
});

// Get a movie
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

// Update movie
app.put('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(movie);
});

//Send frontend for all non-API routes 
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
