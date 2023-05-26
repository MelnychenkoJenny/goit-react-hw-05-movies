import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyles = styled(NavLink)`
text-decoration: none;
color: black;
&.active {
    
    color: tomato;
  }`