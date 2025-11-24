// Read.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './movie.jsx';

const Read = () => {
  const [myMovies, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/movies')
      .then((response) => {
        setMovie(response.data.myArray);
      })
      .catch((error) => {
        console.log('GET /api/movies error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <Movies MyMovies={myMovies} />
    </div>
  );
};
export default Read;
