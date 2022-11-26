import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getMovieReviews(movieId, '1', controller.signal);
        console.log(response.results);
        if (response.results) {
          setReviews(response.results);
        }
      } catch (error) {}
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
