import React, { Component, createContext } from "react";
import usersData from "../../mock/users.json";

const UsersContext = createContext();

class UsersProvider extends Component {
  constructor() {
    super();
    this.state = { users: usersData.results };
  }

  render() {
    return (
      <UsersContext.Provider value={this.state.users}>
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}

export { UsersProvider };
export default UsersContext;
