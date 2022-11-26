import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/api';
import { CastInfo } from 'components/CastInfo/CastInfo';
import { Grid } from 'components/App.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getMovieCredits(movieId, controller.signal);
        console.log(response);
        if (response?.length !== 0) {
          setCast(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Grid>
      {cast?.map(({ name, character, profile_path, id }) => (
        <CastInfo
          key={id}
          name={name}
          character={character}
          profile_path={profile_path}
        />
      )) ?? <p>We don't have any cast information for this movie</p>}
    </Grid>
  );
};

export default Cast;
