import React, { Component, createContext } from "react";
import WS from "react-native-websocket";

const UsersContext = createContext();

class UsersProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  getUserInfoFromData(data) {
    const match = data.match(/{"results":\[.*\],"info":\{.*\}\}/);
    if (match) {
      const json = JSON.parse(match[0]);
      const user = json.results[0];
      return user;
    }
    return null;
  }

  addUser(user) {
    this.setState({ users: [...this.state.users, user] });
  }

  render() {
    return (
      <UsersContext.Provider value={this.state.users}>
        <WS
          ref={ref => {
            this.ws = ref;
          }}
          url="wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
          onMessage={({ data }) => {
            const user = this.getUserInfoFromData(data);
            if (user) this.addUser(user);
          }}
          reconnect
        />
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}

export { UsersProvider };
export default UsersContext;
