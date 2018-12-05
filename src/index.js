import React, { Component } from "react";
import ReactDOM from "react-dom";

//Libs
import axios from "axios";
import styled from "styled-components";

//Components
import Navbar from "./components/Layout/Navbar";
import MovieCard from "./components/MovieCard";

import "./styles.css";

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      setTimeout(async () => {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c4f8cf8abe8461ffab5ac32209887546&language=en-US&page=1"
        );

        const { results } = res.data;

        this.setState({
          movies: results
        });
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movies } = this.state;
    const list = movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ));

    return (
      <AppWrapper>
        <Container>
          <Navbar title="movieDB" />
          {movies.length !== 0 ? (
            <MovieList>{list}</MovieList>
          ) : (
            <h1>Loading...</h1>
          )}
        </Container>
      </AppWrapper>
    );
  }
}

// Styles
const AppWrapper = styled.div`
  background-color: #e0e0e0;
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: white;
  min-height: 100vh;
  padding: 0 3.5%;
  margin: 0 auto;
`;

const MovieList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
