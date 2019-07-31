import React, { Component } from "react";
import UsersContext from "../../context/UsersContext";
import Profiles from "./Profiles";

class ProfilesContainer extends Component {
  static navigationOptions = {
    title: "Profiles"
  };
  render() {
    return (
      <UsersContext.Consumer>
        {values => (
          <Profiles users={values} navigation={this.props.navigation} />
        )}
      </UsersContext.Consumer>
    );
  }
}

export default ProfilesContainer;
