import React from "react";
import { Text } from "react-native";
import { UsersProvider } from "./js/context/UsersContext";

const App = () => {
  return (
    <UsersProvider>
      <Text>This is a wunderful app</Text>
    </UsersProvider>
  );
};

export default App;
