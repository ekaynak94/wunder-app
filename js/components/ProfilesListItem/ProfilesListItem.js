import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import styles from "./styles";
import theme from "../../theme";

const ProfilesListItem = ({ user }) => (
  <View>
    <Text>{`${user.name.first} ${user.name.last}`}</Text>
  </View>
);

ProfilesListItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProfilesListItem;
