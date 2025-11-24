// movieitem.jsx
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Movieitem = (props) => {
  const movie = props.MyMovie;

  return (
    <div style={{ marginBottom: '20px' }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>

          <img
            src={movie.poster}
            alt="Poster"
            style={{ width: '200px', borderRadius: '10px' }}
          />

          <br />
          <br />

          <Link to={`/edit/${movie._id}`} className="btn btn-primary">
            Edit
          </Link>
        </Card.Body>

        <Card.Footer className="text-muted">{movie.year}</Card.Footer>
      </Card>
    </div>
  );
};

export default Movieitem;
