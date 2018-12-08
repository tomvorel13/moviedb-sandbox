import React from "react";

// Styles
import styled from "styled-components";
import { MainHeading } from "../styles/headings";
import { black, white } from "../styles/colors";
import { Roboto } from "../styles/fonts";

const Find = () => {
  return (
    <>
      <MainHeading>Find Component</MainHeading>
      <form>
        <input type="text" name="movieName" placeholder="Enter a movie title" />
        <FormButton type="submit" value="Search" />
      </form>
    </>
  );
};

const FormButton = styled.input`
  display: block;
  width: 8rem;
  font-size: 1.2rem;
  margin: 0 auto;
  font-family: ${Roboto};
  background-color: ${black};
  color: ${white};
  padding: 0.3rem 0.5rem;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Find;
