import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Profiles = ({ users, navigation }) => {
  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          const user = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("MyProfile", { user })}
            >
              <Text>{`${user.name.first} ${user.name.last}`}</Text>
            </TouchableOpacity>
          );
        }}
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
