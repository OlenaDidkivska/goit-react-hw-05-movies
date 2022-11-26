import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { AddInfo, Description, Details } from 'components/App.styled';
import { blankPhoto, imgSrc } from 'components/SharedLayout';
import { LinkWrapper, NavLinkStyled } from 'components/Header/Header.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  const location = useLocation();
  const fromLocationRef = location.state?.from;
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(movieId, controller.signal);
        console.log(response);
        setMovie(response);
      } catch (error) {}
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  const getGenres = () => {
    return movie.genres?.map(genre => genre.name).join(', ') ?? null;
  };

  return (
    <main>
      <LinkWrapper>
        <Link to={fromLocationRef}>Go back</Link>
      </LinkWrapper>

      <Details>
        <img
          src={
            movie.poster_path
              ? imgSrc(300, movie.poster_path)
              : blankPhoto(300, 500)
          }
          alt=""
        />

        <Description>
          <h2>{movie.title}</h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <section>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </section>
          <section>
            <h3>Genres</h3>
            <p>{getGenres()}</p>
          </section>
        </Description>
      </Details>

      <AddInfo>
        <h4>Additional information</h4>
        <LinkWrapper>
          <NavLinkStyled to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLinkStyled>
          <NavLinkStyled to="Reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLinkStyled>
        </LinkWrapper>
      </AddInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
