import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context";

//Libs
import axios from "axios";
import styled from "styled-components";

//Components
import Navbar from "./components/Layout/Navbar";
import MovieList from "./components/MovieList";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <AppWrapper>
            <Container>
              <Navbar title="movieDB" />
              <Switch>
                <Route exact path="/" component={MovieList} />
              </Switch>
            </Container>
          </AppWrapper>
        </Router>
      </Provider>
    );
  }
}

// Styles
const AppWrapper = styled.div`
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: #ffffff;
  min-height: 100vh;
  padding: 0 3.5%;
  margin: 0 auto;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
