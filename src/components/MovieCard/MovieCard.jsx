import {
  Image,
  MovieTitle,
  InfoItem,
  InfoList,
  InfoText,
  TextOverview,
  TextTitle,
  ContainerCard,
} from './MovieCard.styled';

const MovieCard = ({
  detail: { poster_path, title, vote_average, overview, genres },
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';
  const rating = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';
  const review = overview ? overview : 'Not overview';

  return (
    <>
      <ContainerCard>
        <Image src={posterUrl} alt={title} width="200"></Image>
        <div>
          <MovieTitle>{title}</MovieTitle>
          <p>
            <TextTitle>User score:</TextTitle> {rating}
          </p>
          <TextOverview>
            <TextTitle>Overview</TextTitle>
            {review}
          </TextOverview>
          {genres && genres.length > 0 && (
            <p>
              <TextTitle>Genres: </TextTitle>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </ContainerCard>
      <div>
        <InfoText>Additional information</InfoText>
        <InfoList>
          <li>
            <InfoItem to="cast">Cast</InfoItem>
          </li>
          <li>
            <InfoItem to="reviews">Reviews</InfoItem>
          </li>
        </InfoList>
      </div>
    </>
  );
};
export default MovieCard;
