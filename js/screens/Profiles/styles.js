import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: theme.palette.secondary.main
  },
  avatar: {
    borderRadius: 26,
    height: 52,
    width: 52
  }
});

export default styles;
