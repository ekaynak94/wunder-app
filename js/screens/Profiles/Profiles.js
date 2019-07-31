import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Profiles = ({ users, navigation }) => {
  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
        )}
        keyExtractor={item => item.login.uuid}
      />
    </View>
  );
};

Profiles.propTypes = {
  users: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Profiles;
