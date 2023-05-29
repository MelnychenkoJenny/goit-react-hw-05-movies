import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-left: 20px;

  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.accentDark};
  font-weight: 600;
  background-color: ${({ theme: { colors } }) => colors.backgroundBtn};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    scale: 1.1;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;
