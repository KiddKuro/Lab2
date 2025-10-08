// Import the Movieitem component — responsible for displaying individual movie cards
import Movieitem from './movieitem.jsx';

// Define the Movies functional component, which receives a list of movies via props
const Movies = (props) => {
    return (
        // Map through the 'MyMovies' array and render a Movieitem for each movie
        props.MyMovies.map((movie, index) => (
            // Always include a unique 'key' prop when rendering lists in React
            <Movieitem MyMovie={movie} key={movie.imdbID || index}></Movieitem>
        ))
    );
}

// Export the component so it can be used elsewhere
export default Movies;
