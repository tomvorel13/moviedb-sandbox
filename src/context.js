import React, { Component, createContext } from "react";

//libs
import axios from "axios";

const Context = createContext();

export class Provider extends Component {
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
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
