import { useState, useEffect } from 'react';
import { MovieList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies(controller.signal);
        console.log(response);
        setMovies(response);
      } catch (error) {}
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
