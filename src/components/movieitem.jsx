// Import UI components (Bootstrap Card and Button)
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

// Movieitem component displays a single movie and allows edit/delete actions
const Movieitem = (props) => {

  // Receive the movie object from parent component via props
  const movie = props.myMovie; 

  // Function to handle deleting the movie from the database
  const handleDelete = (e) => {
    e.preventDefault(); 
    // Send DELETE request to backend using the movie's _id
    axios
      .delete('http://localhost:3000/api/movie/' + props.myMovie._id)
      .then((res) => {
        console.log(res.data); // Log server response
        alert('Movie ' + movie.title + ' Deleted'); 

        // Reload movie list in parent component after deletion
        props.Reload(); 
      })
      .catch((error) => {
        console.log("Delete Error:", error); // Catch any errors
      });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Card className="text-center">
        <Card.Body>

          {/* Display movie title */}
          <Card.Title>{movie.title}</Card.Title>

          {/* Movie poster image */}
          <img
            src={movie.poster}
            alt="Poster"
            style={{ width: '200px', borderRadius: '10px' }}
          />

          <br /><br />

          {/* Edit button navigates to edit form using movie's _id */}
          <Link to={`/edit/${movie._id}`} className="btn btn-primary">
            Edit
          </Link>
        </Card.Body>

        {/* Display movie release year */}
        <Card.Footer className="text-muted">{movie.year}</Card.Footer>
      </Card>

      {/* Delete button triggers the delete handler */}
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default Movieitem;
