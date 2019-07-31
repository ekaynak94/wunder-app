import React from "react";
import { UsersProvider } from "./js/context/UsersContext";
import StackNavigator from "./js/navigation/StackNavigator";

const App = () => {
  return (
    <UsersProvider>
      <StackNavigator />
    </UsersProvider>
  );
};

export default App;
