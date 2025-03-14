import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  safeAreaDark: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    backgroundColor: "#000",
    marginTop: -1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: -1,
  },

  maincontainer: {
    padding: 10,
    paddingBottom: 100,
  },
});
