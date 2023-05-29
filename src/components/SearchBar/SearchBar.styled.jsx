import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
  @media screen and (min-width: 760px) {
    width: 500px;
  }
  @media screen and (min-width: 1300px) {
    width: 700px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    box-shadow: ${({ theme: { colors } }) => colors.shadowInset};
  }
  @media screen and (min-width: 760px) {
    width: 500px;
  }
  @media screen and (min-width: 1300px) {
    width: 700px;
  }
`;

export const ButtonSubmit = styled.button`
  outline: none;
  border: none;
  width: 35px;
  background-color: ${({ theme: { colors } }) => colors.backgroundBtn};

  :hover svg {
    scale: 1.4;
  }
  svg {
    width: 20px;
    height: 20px;
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
