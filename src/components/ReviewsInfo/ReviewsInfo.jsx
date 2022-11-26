import { ReviewItem } from './ReviewsInfo.styled';
import PropTypes from 'prop-types';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id}>
            <h5>{author}</h5>
            <p>{content}</p>
          </ReviewItem>
        );
      })}
    </ul>
  );
};

ReviewsInfo.propTypes = {
  reviews: PropTypes.array.isRequired,
};
