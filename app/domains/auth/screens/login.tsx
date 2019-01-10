import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import styled from "../../app/styled-components";

import { compose, graphql } from "react-apollo";
import { LOGIN } from "../graphql";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationAction, IApplicationState } from "../../app/root-reducer";
import * as actions from "../redux/actions";

const StyledText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
`;

const StyledInput = styled(TextInput)`
  border-width: 1;
`;

interface IDispatchProps {
  loadingAction: typeof actions.loadingAction;
  loginAction: typeof actions.loginAction;
  loginInputChanged: typeof actions.loginInputChanged;
}

interface IStateProps {
  email: string;
  loading: boolean;
  password: string;
}

interface IOtherProps {
  loginMutation: (
    {  }: { variables: { email: string; password: string } }
  ) => Promise<any>;
  navigation: NavigationScreenProp<any, any>;
}

type Props = IStateProps & IDispatchProps & IOtherProps;

class Login extends Component<Props> {
  public onEmailChange = (text: string) => {
    this.props.loginInputChanged("email", text);
  }

  public onPasswordChange = (text: string) => {
    this.props.loginInputChanged("password", text);
  }

  public login = () => {
    const {
      email,
      loadingAction,
      loginAction,
      loginMutation,
      password,
      navigation
    } = this.props;

    const variables = {
      email,
      password
    };

    loadingAction(true);

    loginMutation({ variables })
      .then((res) => {
        loadingAction(false);
        loginAction(res.data.login);
        navigation.navigate("Main");
      })
      .catch(() => {
        loadingAction(false);
      });
  }

  public render() {
    const { email, password, loading } = this.props;

    if (loading) {
      return <View />;
    }

    return (
      <View>
        <StyledInput
          placeholder="Email"
          onChangeText={this.onEmailChange}
          value={email}
        />
        <StyledInput
          placeholder="Password"
          onChangeText={this.onPasswordChange}
          value={password}
        />
        <TouchableOpacity onPress={this.login}>
          <StyledText color="#A12345">
            Login! {email} {password}
          </StyledText>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  email: state.auth.data.email,
  loading: state.auth.loading,
  password: state.auth.data.password
});

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>) => ({
  loadingAction: (loading: boolean) => dispatch(actions.loadingAction(loading)),
  loginAction: (token: string) => dispatch(actions.loginAction(token)),
  loginInputChanged: (name: string, value: string) =>
    dispatch(actions.loginInputChanged(name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compose(graphql(LOGIN, { name: "loginMutation" }))(Login));
