// Import the Movies component from the local 'movie.jsx' file
import Movies from './movie.jsx';

// Define the Read functional component
const Read = () => {

    // Static array of movie data (mock data that could later be fetched from an API)
    const data = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    
    return (
        <div>
            {/* Header text for this component */}
            <h1>Hello From Read</h1>

            {/* Render the Movies component and pass the 'data' array as a prop named 'MyMovies' */}
            <Movies MyMovies={data}></Movies>
        </div>
    );
}

// Export the Read component so it can be used in other parts of the app
export default Read;
