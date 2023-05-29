import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 20px;
  text-align: center;
`;
export const CastItem = styled.li`
  flex-basis: calc((100% - 10px) / 2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};

  @media screen and (min-width: 400px) {
    flex-basis: calc((100% - 20px) / 3);
  }
  @media screen and (min-width: 640px) {
    flex-basis: calc((100% - 20px) / 5);
  }
  @media screen and (min-width: 1270px) {
    flex-basis: calc((100% - 30px) / 7);
  }
`;
export const CastInfo = styled.div`
  padding: 5px;
`;

export const Empty = styled.p`
  text-align: center;
`;
