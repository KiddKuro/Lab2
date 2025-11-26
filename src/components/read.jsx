// Import hooks, axios and the Movies list component
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './movie.jsx';

const Read = () => {

  // State to store the movies array
  const [myMovies, setMovie] = useState([]);

  // Function to reload movies from the backend
  const Reload = () => {
    axios.get('http://localhost:3000/api/movies')
      .then((response) => {
        console.log(response.data.myArray);
        setMovie(response.data.myArray);   // Save movies to state
      })
      .catch((error) => { 
        console.log(error); // Error handling
      });
  };

  // useEffect runs on component mount → loads movies once
  useEffect(() => {
    Reload();
  }, []);

  return (
    <div>
      <h1>Hello!</h1>

      {/* Pass movie list and reload function down to Movies component */}
      <Movies myMovies={myMovies} Reload={Reload} />
    </div>
  );
};

// Export component
export default Read;
