import React from "react";

// Styles
import styled from "styled-components";
import { black } from "../styles/colors";
import { Roboto } from "../styles/fonts";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <ImageWrap>
        <Poster
          src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt="Movie poster"
        />
      </ImageWrap>
      <CardContentWrap>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
      </CardContentWrap>
    </Card>
  );
};

// Styles
const Card = styled.div`
  width: 100%;
  display: flex;
`;
const Poster = styled.img`
  max-width: 120px;
`;
const ImageWrap = styled.div``;
const MovieTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${Roboto};
  margin: 0 0 0.7rem 0;
  color: ${black};
  word-wrap: auto;
`;

const CardContentWrap = styled.div`
  padding: 0 1rem;
  text-align: left;
`;

const MovieOverview = styled.p`
  margin: 0;
  font-family: ${Roboto};
  font-weight: 300;
`;

export default MovieCard;
