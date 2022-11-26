import { GridItem } from 'components/App.styled';
import { blankPhoto, imgSrc } from 'components/SharedLayout';
import PropTypes from 'prop-types';

export const CastInfo = ({ name, character, profile_path }) => {
  return (
    <GridItem>
      <img
        src={profile_path ? imgSrc(200, profile_path) : blankPhoto(200, 300)}
        alt=""
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </GridItem>
  );
};

CastInfo.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
