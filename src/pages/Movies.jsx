import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/api';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Grid, GridItem, StyledLink } from 'components/App.styled';
import { blankPhoto, imgSrc } from 'components/SharedLayout';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

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
      {movies?.length !== 0 && (
        <Grid>
          {movies?.map(({ id, title, poster_path }) => (
            <GridItem key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? imgSrc(200, poster_path)
                      : blankPhoto(200, 300)
                  }
                  alt=""
                />
                {title}
              </StyledLink>
            </GridItem>
          ))}
        </Grid>
      )}
    </section>
  );
};

export default Movies;
