import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfilesScreen from "../screens/Profiles";
import MyProfileScreen from "../screens/MyProfile";
import BackButton from "../components/BackButton";

const AppNavigator = createStackNavigator(
  {
    Profiles: ProfilesScreen,
    MyProfile: MyProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft:
        navigation.state.routeName === "MyProfile" ? (
          <BackButton onPress={() => navigation.goBack()} />
        ) : null
    }),
    initialRouteName: "MyProfile"
  }
);

export default createAppContainer(AppNavigator);
