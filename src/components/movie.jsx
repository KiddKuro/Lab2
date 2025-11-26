// movie.jsx
import Movieitem from './movieitem.jsx';

const Movies = (props) => {
  return (
    <div>
      {props.myMovies.map((movie) => (
        <Movieitem myMovie={movie} key={movie._id} Reload ={props.Reload} />
      ))}
    </div>
  );
};

export default Movies;

