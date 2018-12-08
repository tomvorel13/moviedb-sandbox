import React, { Component } from "react";
import { Consumer } from "../context";

// Libs
import styled from "styled-components";
import { MainHeading } from "../styles/headings";

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

export default MovieList;
