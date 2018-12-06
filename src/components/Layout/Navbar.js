import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <NavbarWrap>
      <NavHeading>{title}</NavHeading>
      <Link to="/explore">Explore</Link>
    </NavbarWrap>
  );
};

// Styles
const NavbarWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  padding: 1rem 0;
  border-bottom: 2px solid #212121;
  margin: 0;
`;

const NavHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #212121;
`;

export default Navbar;
