import React, { Component } from "react";
import { Consumer } from "../context";

//libs
import styled from "styled-components";

// Components
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;
          const list = movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ));
          return <MovieListWrapper>{list}</MovieListWrapper>;
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
