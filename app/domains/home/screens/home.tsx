import React, { Component } from "react";
import { withNamespaces, WithNamespaces } from "react-i18next";
import { Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface IOtherProps {
  navigation: NavigationScreenProp<any, any>;
}

type Props = WithNamespaces & IOtherProps;

class Home extends Component<Props> {
  public navigateToAuth = () => {
    this.props.navigation.navigate("Auth");
  }
  public render() {
    const { t } = this.props;

    return (
      <TouchableOpacity onPress={this.navigateToAuth}>
        <Text>{t("welcome")}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNamespaces()(Home);
