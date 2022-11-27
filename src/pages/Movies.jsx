import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';

import { MovieList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieTitle) {
      return;
    }

    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await searchMovies(movieTitle, '1', controller.signal);
        if (response.results?.length !== 0) {
          setMovies(response.results);
        } else {
          alert('Sorry, there are no films with this word');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieTitle]);

  const updateQueryString = ({ query }) => {
    const nextParams = query !== '' ? { query: query } : {};
    setSearchParams(nextParams);
  };

  return (
    <section>
      <SearchForm onSubmitForm={updateQueryString} />
      {movies?.length > 0 && <MovieList movies={movies} />}
    </section>
  );
};

export default Movies;
