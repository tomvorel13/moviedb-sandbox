import React from "react";
import styled from "styled-components";

// Styles
import { black, white } from "../../styles/colors";

import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <NavbarWrap>
      <NavHeading>{title}</NavHeading>
      <NavMenu>
        <NavbarLink to="/">Top 20</NavbarLink>
        <NavbarLink to="/explore">Explore</NavbarLink>
        <NavbarLink to="/find">Find</NavbarLink>
      </NavMenu>
    </NavbarWrap>
  );
};

// Styles
const NavbarWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${white};
  font-family: "Roboto", sans-serif;
  padding: 1rem 0;
  border-bottom: 2px solid ${black};
  margin: 0;
`;

const NavHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: ${white};
  padding: 0.5rem 0.8rem;
  background-color: ${black};
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${black};
  font-size: 1.2rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default Navbar;
