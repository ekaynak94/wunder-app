import React, { Component, createContext } from "react";
import usersData from "../../mock/users.json";
import console = require("console");

const UsersContext = createContext();

class UsersProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: usersData.results,
      open: false
    };
    this.socket = new WebSocket(
      "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
    );
  }

  componentDidMount() {
    this.socket.onmessage = ({ data }) => console.log(data)
  }
  r;
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
