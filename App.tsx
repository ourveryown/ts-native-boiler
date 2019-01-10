import React, { Component } from "react";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./app/config/api";

// REDUX
import { Provider } from "react-redux";
import configureStore from "./app/config/store";

// STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "./app/theme";

// APP
import { createAppContainer } from "react-navigation";
import Main from "./app/domains/app/navigation";

const store = configureStore();

const AppContainer = createAppContainer(Main);

export default class App extends Component {
  public render() {
    return (
      <ApolloProvider client={Client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <AppContainer />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}
