import React from "react";
import styled from "styled-components";

const Navbar = ({ title }) => {
  return (
    <NavbarWrap>
      <NavHeading>{title}</NavHeading>
    </NavbarWrap>
  );
};

const NavbarWrap = styled.nav`
  background-color: black;
  font-family: "Roboto", sans-serif;
  padding: 0.4rem 0;
`;

const NavHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: white;
`;

export default Navbar;
