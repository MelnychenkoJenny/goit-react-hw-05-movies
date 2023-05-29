import styled from 'styled-components';

export const MoviesItemStyle = styled.li`
  flex-basis: calc((100% - 10px) / 2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.06;
  }
  @media screen and (min-width: 760px) {
    flex-basis: calc((100% - 20px) / 4);
  }
  @media screen and (min-width: 1300px) {
    flex-basis: calc((100% - 30px) / 5);
  }
`;
export const MovieTitle = styled.h3`
  padding: 10px;
  font-size: 12px;
`;
