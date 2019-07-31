import React, { Component } from "react";
import { View, Text } from "react-native";

class MyProfileContainer extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    return (
      <View>
        <Text>This is the my profile screen</Text>
      </View>
    );
  }
}

export default MyProfileContainer;
