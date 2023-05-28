import { NavLink } from "react-router-dom";
import styled from "styled-components";


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
    @media screen and (min-width: 760px) {
      gap: 80px;
      @media screen and (min-width: 760px) {
        gap: 150px;
    }`
    