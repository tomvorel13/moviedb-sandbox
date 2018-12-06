import React from "react";
import spinner from "./spinner.gif";

//libs
import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerWrap>
      <SpinnerGif src={spinner} />
    </SpinnerWrap>
  );
};

const SpinnerWrap = styled.div`
  width: 200px;
  margin: auto;
`;

const SpinnerGif = styled.img``;

export default Spinner;
