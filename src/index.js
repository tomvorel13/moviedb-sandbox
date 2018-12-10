import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context";

// Styles
import styled from "styled-components";
import { white } from "./styles/colors";

// Components
import Navbar from "./components/Layout/Navbar";
import MovieList from "./components/MovieList";
import Explore from "./components/pages/Explore/Explore";
import Find from "./components/pages/Find/Find";

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
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/find" component={Find} />
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
  background-color: ${white};
`;

const Container = styled.div`
  max-width: 1080px;
  background-color: ${white};
  min-height: 100vh;
  padding: 0 3.5%;
  margin: 0 auto;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
