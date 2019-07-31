import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import theme from "../../theme";

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
              style={styles.listItem}
            >
              <View style={styles.userInfoContainer}>
                <Image
                  style={styles.userAvatar}
                  source={{ uri: user.picture.medium }}
                />
                <Text style={styles.userInfo}>{`${user.name.first}, ${
                  user.dob.age
                }`}</Text>
              </View>
              <View>
                <Icon
                  name="right"
                  size={25}
                  color={theme.palette.secondary.main}
                />
              </View>
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
