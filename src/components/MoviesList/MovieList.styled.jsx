import styled from "styled-components";

export const MoviesListStyle = styled.ul`
display: flex;
flex-wrap: wrap;
    justify-content: center;
    margin-top: -20px;
    margin-left: -20px;
    @media screen and (min-width: 760px) {
        margin-top: -32px;
    margin-left: -32px;}

        @media screen and (min-width: 1200px) {
            margin-top: -32px;
            margin-left: -16px;}
    
`
