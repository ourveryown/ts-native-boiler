import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import styled from "../../app/styled-components";

const StyledText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
`;

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
        <StyledText color="#A12345"> Hello From Login </StyledText>
      </TouchableOpacity>
    );
  }
}
