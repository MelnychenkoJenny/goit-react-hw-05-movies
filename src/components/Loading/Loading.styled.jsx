import styled, { keyframes } from "styled-components";

const spin = keyframes `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

export const LoadingStyle = styled.div`
width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #b92f2c;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

