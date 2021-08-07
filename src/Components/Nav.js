import React from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";

const NavStyled = Styled.nav`

font-family: 'Graduate', cursive;

.active{
    border-bottom: 1px solid yellow;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 1px #424242;
    padding: 5px;

}

display:flex;
background-color: #000;
min-height: 60px;
align-items: center;
gap: 15px;
justify-content: center;
a{
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
}



`;

function Nav() {
  return (
    <NavStyled>
      <NavLink to="./" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="./create" activeClassName="active">
        Compose Team
      </NavLink>
      <NavLink to="./event" activeClassName="active">
        First Quarter
      </NavLink>
      <NavLink to="./about" activeClassName="active">
        ABOUT
      </NavLink>
    </NavStyled>
  );
}

export default Nav;
