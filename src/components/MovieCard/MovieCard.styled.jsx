import styled from 'styled-components';
import { BackBtn } from 'pages/MoviesDetails.styled';

export const ContainerCard = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    gap: 30px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  @media screen and (min-width: 600px) {
    width: 300px;
    margin-bottom: 0;
    margin: 0;
  }
`;
export const MovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const TextTitle = styled.span`
  font-weight: 600;
`;
export const TextOverview = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const InfoText = styled.h3`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const InfoItem = styled(BackBtn)`
  margin-left: 0;
`;
