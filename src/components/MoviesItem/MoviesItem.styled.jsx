import styled from "styled-components";

export const MoviesItemStyle = styled.li`
margin-top: 20px;
margin-left: 20px;
@media screen and (min-width: 760px) {
    flex-basis: calc(50% - 32px);}
    @media screen and (min-width: 1280px) {
        flex-basis: calc(33.3333% - 16px);
    margin-top: 32px;
    margin-left: 16px;}
`

