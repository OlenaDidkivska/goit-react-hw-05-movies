import { Grid, GridItem } from 'components/App.styled';
import { blankPhoto, imgSrc } from 'components/SharedLayout';
import { useLocation } from 'react-router-dom';
import { MovieTitle } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Grid>
      {movies.map(({ id, title, poster_path }) => (
        <GridItem key={id}>
          <MovieTitle to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path ? imgSrc(200, poster_path) : blankPhoto(200, 300)
              }
              alt=""
            />
            <h2>{title}</h2>
          </MovieTitle>
        </GridItem>
      ))}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
