import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 35px;
  text-align: center;
`;
export const ContainerList = styled.div`
  max-width: 345px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 760px) {
    max-width: 760px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1300px;
  }
`;
