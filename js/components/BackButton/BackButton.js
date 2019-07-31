import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <View>
      <Icon name="md-arrow-round-back" size={25} color="black" />
    </View>
  </TouchableOpacity>
);

export default BackButton;
