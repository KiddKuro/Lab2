import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();            // Get movie ID from URL
  const navigate = useNavigate();        // Navigation hook

  const [title, setTitle] = useState("");  // Movie title state
  const [year, setYear] = useState("");    // Movie year state
  const [poster, setPoster] = useState(""); // Movie poster URL state

  // Load movie data when component loads
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movie/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setYear(res.data.year);
        setPoster(res.data.poster);
      })
      .catch((err) => console.log("GET Error:", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();  // Stop page reload

    // Send updated movie data to server
    axios
      .put("http://localhost:3000/api/movie/" + id, {
        title,
        year,
        poster,
      })
      .then(() => navigate("/read"))    // Go back to Read page
      .catch((err) => console.log("PUT Error:", err));
  };

  return (
    <div>
      <h2>Edit Movie</h2>

      {/* Movie edit form */}
      <form onSubmit={handleSubmit}>
        <label>Movie Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Release Year:</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} />

        <label>Poster URL:</label>
        <input value={poster} onChange={(e) => setPoster(e.target.value)} />

        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
};

export default Edit;
