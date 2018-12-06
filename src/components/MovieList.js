import React, { Component } from "react";
import { Consumer } from "../context";

//libs
import styled from "styled-components";

// Components
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

class MovieList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;
          const list = movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ));
          return (
            <>
              <MainHeading>Top 20 Movies</MainHeading>
              {movies.length !== 0 ? (
                <MovieListWrapper>{list}</MovieListWrapper>
              ) : (
                <Spinner />
              )}
            </>
          );
        }}
      </Consumer>
    );
  }
}

const MovieListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MainHeading = styled.h1`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #212121;
  margin: 3rem 0;
`;

export default MovieList;
