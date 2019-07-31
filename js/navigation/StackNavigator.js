import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfilesScreen from "../screens/Profiles";
import MyProfileScreen from "../screens/MyProfile";

const AppNavigator = createStackNavigator(
  {
    Profiles: ProfilesScreen,
    MyProfile: MyProfileScreen
  },
  {
    initialRouteName: "Profiles"
  }
);

export default createAppContainer(AppNavigator);
