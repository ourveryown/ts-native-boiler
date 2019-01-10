import { createStackNavigator } from "react-navigation";
import { STACK_DEFAULTS } from "../app/constants";
import { Home } from "./screens";

export const HomeStack = createStackNavigator(
  {
    Home
  },
  {
    ...STACK_DEFAULTS
  }
);
