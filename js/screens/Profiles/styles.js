import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: theme.palette.secondary.main
  },
  listItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  userAvatar: {
    borderRadius: 26,
    height: 52,
    width: 52,
    marginRight: 15
  },
  userInfo: {
    fontFamily: theme.fonts.primary.main,
    fontSize: 18,
    textTransform: "capitalize",
    color: theme.palette.primary.main
  }
});

export default styles;
