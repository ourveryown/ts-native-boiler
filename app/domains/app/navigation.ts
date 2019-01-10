import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { AuthStack } from "../auth/navigation";
import { HomeStack } from "../home/navigation";

const MainTabs = createBottomTabNavigator({
  Home: HomeStack
});

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainTabs
  },
  { initialRouteName: "Auth" }
);
