// Import the Movies component from the local 'movie.jsx' file
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './movie.jsx';

// Define the Read functional component
const Read = () => {
const [myMovies, setMovie] = useState ([]);

useEffect(
    ()=>{
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
    .then((response)=>{
        console.log(response.data.myArray);
        setMovie(response.data.myArray);
    })
    .catch(()=>{console.log(error)});

    },[]
);

    return (
        <div>
            {/* Header text for this component */}
            <h1>Hello!</h1>

            {/* Render the Movies component and pass the 'data' array as a prop named 'MyMovies' */}
            <Movies MyMovies={myMovies}></Movies>
        </div>
    );
}

// Export the Read component so it can be used in other parts of the app
export default Read;
