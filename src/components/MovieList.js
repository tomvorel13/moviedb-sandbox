import React, { Component } from "react";
import { Consumer } from "../context";

// Libs
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
  margin: 2rem auto;
  max-width: 50rem;
`;

export default MovieList;
