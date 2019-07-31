import React from "react";
import { View, FlatList } from "react-native";
import ProfileListItem from "../../components/ProfilesListItem";
import PropTypes from "prop-types";
import styles from "./styles";

const Profiles = ({ users, navigation }) => {
  return (
    <View>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <ProfileListItem user={item} />}
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
