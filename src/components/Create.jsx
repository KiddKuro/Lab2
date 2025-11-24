// Create.jsx
import { useState } from 'react';
import axios from 'axios';

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [posterBase64, setPosterBase64] = useState('');
  const [posterPreview, setPosterPreview] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPosterBase64(reader.result); // Base64 string for DB
      setPosterPreview(reader.result); // Preview in UI
    };

    reader.readAsDataURL(file); // file -> Base64
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      title,
      year,
      poster: posterBase64, // store Base64
    };

    axios
      .post('http://localhost:3000/api/movie', movie)
      .then((res) => {
        alert('Movie Added Successfully!');
        setTitle('');
        setYear('');
        setPosterBase64('');
        setPosterPreview('');
      })
      .catch((err) => console.log('POST /api/movie error:', err));
  };

  return (
    <div>
      <h2>Add a Movie</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Release Year:</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Movie Poster (Upload File):</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {posterPreview && (
          <div style={{ marginTop: '10px' }}>
            <p>Preview:</p>
            <img
              src={posterPreview}
              alt="Poster Preview"
              style={{ maxWidth: '200px', borderRadius: '10px' }}
            />
          </div>
        )}

        <button
          type="submit"
          className="btn btn-success"
          style={{ marginTop: '10px' }}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default Create;
