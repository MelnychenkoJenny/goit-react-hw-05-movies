import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const ContainerMain = styled(Container)`
width: 100%;
margin-left: auto;
margin-right: auto;
@media screen and (min-width: 760px) {
  max-width: 760px;}
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
}
`;
export const Header = styled.header`
background: #bbbbbb;
background: linear-gradient(to top, #ffffff, #bbbbbb);
`
export const NavLinkStyles = styled(NavLink)`
color: black;
&.active {
    color: #b92f2c;
  }`

export const NavList = styled.ul`
display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 35px;
    text-align: center;
    @media screen and (min-width: 760px) {
      gap: 80px;}
      @media screen and (min-width: 1200px) {
        gap: 150px;
    }`
    