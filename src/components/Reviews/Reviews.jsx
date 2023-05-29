import { Error } from 'components/Error/Error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { ReviewsAuthor, ReviewsContent } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviewsInfo(results);
      } catch (error) {
        setError(error.message);
      }
    };

    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviewsInfo.length ? (
        <ul>
          {reviewsInfo.map(({ author, content, id }) => (
            <li key={id}>
              <ReviewsAuthor>Author: {author}</ReviewsAuthor>
              <ReviewsContent>{content}</ReviewsContent>
            </li>
          ))}
        </ul>
      ) : (
        <p>Unfortunately, we don't have cast information for this movie.</p>
      )}
      {error && <Error error={error} />}
    </>
  );
};

export default Reviews;
