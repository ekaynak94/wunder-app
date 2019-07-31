import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfilesScreen from "../screens/Profiles";
import MyProfileScreen from "../screens/MyProfile";
import BackButton from "../components/BackButton";
import theme from "../theme";

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
        ) : null,
      headerLeftContainerStyle: {
        left: 15
      },
      headerStyle: {
        backgroundColor: "transparent",
        height: 100
      },
      headerTitleStyle: {
        textTransform: "uppercase",
        color: theme.palette.secondary.main,
        fontFamily: theme.fonts.primary.main,
        fontSize: 20
      }
    }),
    initialRouteName: "MyProfile"
  }
);

export default createAppContainer(AppNavigator);
