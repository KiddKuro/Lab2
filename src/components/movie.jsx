// movie.jsx
import Movieitem from './movieitem.jsx';

const Movies = (props) => {
  return (
    <div>
      {props.MyMovies.map((movie) => (
        <Movieitem MyMovie={movie} key={movie._id} />
      ))}
    </div>
  );
};

export default Movies;

