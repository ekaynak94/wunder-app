import React, { Component, createContext } from "react";
const UsersContext = createContext();

class UsersProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      socketOpen: false
    };
    this.socket = null;
  }

  componentDidMount() {
    this.initSocket();
  }

  componentDidUpdate() {
    if (!this.state.socketOpen) this.initSocket();
  }

  initSocket() {
    this.socket = new WebSocket(
      "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
    );
    this.socket.onopen = () => this.setState({ socketOpen: true });
    this.socket.onclose = () => this.setState({ socketOpen: false });
    this.socket.onmessage = ({ data }) => {
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
