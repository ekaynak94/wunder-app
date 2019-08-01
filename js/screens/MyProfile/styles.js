import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", height: "100%" },
  top: {
    flex: 0.7,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderColor: theme.palette.secondary.main,
    borderBottomWidth: 1,
    padding: 15
  },
  middle: {
    position: "relative",
    flex: 2.2,
    width: "100%",
    height: "100%",
    borderColor: theme.palette.secondary.main,
    borderBottomWidth: 1
  },
  bottom: { flex: 1.1, flexDirection: "row" },
  right: {
    position: "relative",
    flex: 1.8,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%"
  },
  left: {
    position: "relative",
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderColor: theme.palette.secondary.main,
    borderRightWidth: 1
  },
  sectionTitle: {
    position: "absolute",
    zIndex: 99999,
    left: 15,
    top: 15,
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.primary.main,
    fontSize: 16
  },
  userAvatar: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginRight: 25
  },
  userInfoTop: {
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.primary.main,
    fontSize: 16
  },
  userInfoBottom: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    fontFamily: theme.fonts.primary.main,
    fontSize: 20
  },
  map: {
    width: "100%",
    height: "100%"
  },
  marker: {
    height: 50,
    width: 50
  },
  ageIndicator: {
    width: "100%",
    height: "50%",
    backgroundColor: theme.palette.primary.opaque,
    position: "relative"
  },
  age: {
    marginLeft: "70%",
    marginBottom: 5,
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.primary.main,
    fontSize: 16
  },
  bigBar: {
    position: "absolute",
    right: 0,
    top: -3,
    backgroundColor: theme.palette.primary.main,
    width: "30%",
    height: 3
  },
  smallBar: {
    position: "absolute",
    right: 0,
    backgroundColor: theme.palette.primary.main,
    width: "10%",
    height: 1
  }
});

export default styles;
