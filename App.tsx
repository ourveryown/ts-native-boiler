import React, { Component } from "react";

// APP
import { createAppContainer } from "react-navigation";
import Main from "./app/domains/app/navigation";

// STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "./app/theme";

const AppContainer = createAppContainer(Main);

export default class App extends Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
