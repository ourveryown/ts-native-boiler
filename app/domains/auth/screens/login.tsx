import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
export default class Login extends Component<IProps> {
  public navigateToHome = () => {
    this.props.navigation.navigate("Home");
  }

  public render() {
    return (
      <TouchableOpacity onPress={this.navigateToHome}>
        <Text> Hello From Login </Text>
      </TouchableOpacity>
    );
  }
}
