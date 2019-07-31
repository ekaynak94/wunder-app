import React, { Component } from "react";
import { View, Text } from "react-native";

class MyProfileContainer extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");
    return (
      <View>
        <Text>{`This is ${user.name.title}. ${
          user.name.last
        }'s profile screen`}</Text>
      </View>
    );
  }
}

export default MyProfileContainer;
