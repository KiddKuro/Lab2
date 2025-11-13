import { useState } from "react";
import axios from "axios";
function Create() {
  // State to store the movie title input
  const [title, setTitle] = useState('');
  // State to store the movie year input
  const [year, setYear] = useState('');
  // State to store the actual poster file object
  const [posterBase64, setPosterBase64] = useState('');
  // State to store a preview URL for the poster image
  const [posterPreview, setPosterPreview] = useState('');

    const handlePosterChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPosterBase64(reader.result); // this is the Base64 string
        setPosterPreview(reader.result); // preview uses the same data
      };

      reader.readAsDataURL(file); // convert to Base64
    }
  };

  // Handler function called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, year, posterBase64});
 const movie = {
    title: title,
    year: year,
    poster: posterBase64,
  };
  
  axios.post('http://localhost:3000/api/movies', movie)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));


  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state on input change
          />
        </div>

        {/* Input field for movie year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)} // Update year state on input change
          />
        </div>

        {/* File input for movie poster */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="file"
            className="form-control"
            accept="image/*" // Accept only image files
            onChange={handlePosterChange} // Handle file selection
          />
        </div>

        {/* Conditionally render poster preview if a file is selected */}
        {posterPreview && (
          <div style={{ marginTop: '10px' }}>
            <p>Poster Preview:</p>
            <img
              src={posterPreview} // Show image preview
              alt="Poster Preview"
              style={{ maxWidth: '200px', maxHeight: '300px' }} // Limit preview size
            />
          </div>
        )}


        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
