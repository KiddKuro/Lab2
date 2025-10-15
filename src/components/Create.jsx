import { useState } from "react";

function Create() {
  // State to store the movie title input
  const [title, setTitle] = useState('');
  // State to store the movie year input
  const [year, setYear] = useState('');
  // State to store the actual poster file object
  const [posterFile, setPosterFile] = useState(null);
  // State to store a preview URL for the poster image
  const [posterPreview, setPosterPreview] = useState('');

  // Handler function called when the user selects a poster file
  const handlePosterChange = (e) => {
    // Get the first selected file
    const file = e.target.files[0];
    if (file) {
      // Save the file in state for later use (e.g., uploading)
      setPosterFile(file);
      // Generate a temporary URL for the file to show a preview
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  // Handler function called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, year, posterFile });
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
