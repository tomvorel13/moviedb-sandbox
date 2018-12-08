import React from "react";

// Styles
import styled from "styled-components";
import { black } from "../styles/colors";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <ImageWrap>
        <Poster
          src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt="Movie poster"
        />
      </ImageWrap>
      <MovieTitle>{movie.title}</MovieTitle>
    </Card>
  );
};

// Styles
const Card = styled.div`
  max-width: 185px;
  display: flex;
  flex-direction: column;
`;
const Poster = styled.img``;
const ImageWrap = styled.div`
  height: 278px;
`;
const MovieTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: ${black};
  word-wrap: auto;
`;

export default MovieCard;
