import React, { Component } from "react";
import MyProfile from "./MyProfile";

class MyProfileContainer extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");
    return <MyProfile user={user} />;
  }
}

export default MyProfileContainer;
