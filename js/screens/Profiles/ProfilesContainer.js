import React, { Component } from "react";
import { View, Text } from "react-native";

class ProfilesContainer extends Component {
  static navigationOptions = {
    title: "Profiles"
  };
  render() {
    return (
      <View>
        <Text>This is the my profiles screen</Text>
      </View>
    );
  }
}

export default ProfilesContainer;
