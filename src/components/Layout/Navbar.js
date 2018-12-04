import React from "react";
import styled from "styled-components";

const Navbar = ({ title }) => {
  return (
    <NavbarWrap>
      <NavHeading>{title}</NavHeading>
    </NavbarWrap>
  );
};

// Styles
const NavbarWrap = styled.nav`
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  padding: 1rem 0;
`;

const NavHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #000;
`;

export default Navbar;
