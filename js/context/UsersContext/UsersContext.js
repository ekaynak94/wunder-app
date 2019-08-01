import React, { Component, createContext } from "react";

const UsersContext = createContext();

class UsersProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.socket = new WebSocket(
      "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
    );
  }

  componentDidMount() {
    this.socket.onmessage = ({ data }) => {
      console.log(data);
      const match = data.match(/{"results":\[.*\],"info":\{.*\}\}/);
      if (match) {
        const json = JSON.parse(match[0]);
        this.setState({ users: [...this.state.users, json.results[0]] });
      }
    };
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
