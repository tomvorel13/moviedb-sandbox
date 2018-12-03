import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "./styles.css";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1"
    );

    // https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/
    // https://www.themoviedb.org/documentation/api/discover

    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <h1>MovieBox</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
