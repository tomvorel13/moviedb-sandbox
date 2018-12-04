import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

//Components
import Navbar from "./components/Layout/Navbar";

import "./styles.css";

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c4f8cf8abe8461ffab5ac32209887546&language=en-US&page=1"
      );

      const { results } = res.data;

      this.setState({
        movies: results
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movies } = this.state;
    const list = movies.map(movie => (
      <div key={movie.id}>
        <img
          src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt="Movie poster"
        />
        <p className="text-center">{movie.title}</p>
      </div>
    ));

    return (
      <div className="App">
        <Navbar title="movieDB" />
        <div className="container">
          <div>{list}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
