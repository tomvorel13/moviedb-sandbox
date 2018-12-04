import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

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
        <h2>{movie.title}</h2>
      </div>
    ));

    return (
      <div className="App">
        <h1>movieDB</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
