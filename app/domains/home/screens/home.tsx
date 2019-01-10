import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
export default class Home extends Component<IProps> {
  public navigateToAuth = () => {
    this.props.navigation.navigate("Auth");
  }
  public render() {
    return (
      <TouchableOpacity onPress={this.navigateToAuth}>
        <Text> Hello From Home </Text>
      </TouchableOpacity>
    );
  }
}
