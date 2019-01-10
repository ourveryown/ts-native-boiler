import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import Main from "./app/domains/app/navigation";

const AppContainer = createAppContainer(Main);

export default class App extends Component {
  public render() {
    return <AppContainer />;
  }
}
