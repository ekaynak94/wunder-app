import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import PropTypes from "prop-types";
import styles from "./styles";
import theme from "../../theme";

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <View>
      <Icon name="arrowleft" size={25} color={theme.palette.primary.main} />
    </View>
  </TouchableOpacity>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default BackButton;
