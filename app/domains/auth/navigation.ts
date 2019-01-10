import { createStackNavigator } from "react-navigation";
import { STACK_DEFAULTS } from "../app/constants";
import { Login } from "./screens";

export const AuthStack = createStackNavigator(
  {
    Login
  },
  {
    ...STACK_DEFAULTS
  }
);
