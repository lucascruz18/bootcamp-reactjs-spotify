import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";
import GlobalStyle from "./styles/global";

import { Wrapper, Container, Content } from "./styles/components";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Player from "./components/player";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
