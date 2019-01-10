import React, { Component } from "react";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./app/config/api";

// STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "./app/theme";

// APP
import { createAppContainer } from "react-navigation";
import Main from "./app/domains/app/navigation";

const AppContainer = createAppContainer(Main);

export default class App extends Component {
  public render() {
    return (
      <ApolloProvider client={Client}>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
