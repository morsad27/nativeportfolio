import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  maincontainer: {
    padding: 10,
    paddingBottom: 100,
  },

  container: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth > 600 ? "20%" : "5%",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    minHeight: 60,
    flexDirection: "column", //vertical
    paddingVertical: 15,
  },
  containerDark: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth > 600 ? "20%" : "5%",
    padding: 15,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#06f",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    minHeight: 60,
    flexDirection: "column",
    paddingVertical: 15,
  },

  container2: {
    flex: 1,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth > 600 ? "20%" : "5%",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    minHeight: 60, // Prevents shrinking
    flexDirection: "column", // Ensure vertical stacking
    paddingVertical: 15, // Extra space for centering
  },
  container2Dark: {
    flex: 1,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth > 600 ? "20%" : "5%",
    padding: 15,
    backgroundColor: "#000",
    borderColor: "#06f",
    borderWidth: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    minHeight: 60, // Prevents shrinking
    flexDirection: "column", // Ensure vertical stacking
    paddingVertical: 15, // Extra space for centering
  },

  about: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: windowWidth > 600 ? 700 : 600,
    fontSize: windowWidth > 600 ? 28 : 20,
    gap: 2,
  },
  titleDark: {
    fontWeight: windowWidth > 600 ? 700 : 600,
    fontSize: windowWidth > 600 ? 28 : 20,
    gap: 2,
    color: "#fff",
  },

  subtext: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: windowWidth > 600 ? 500 : 400,
    fontSize: windowWidth > 600 ? 27 : 17,
    alignSelf: "center",
    textAlign: "center",
  },
  subtextDark: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: windowWidth > 600 ? 500 : 400,
    fontSize: windowWidth > 600 ? 27 : 17,
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
  },

  flexrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth > 600 ? "5%" : 5,
  },
  
  containerstack: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
  },
  containerstackDark: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
    borderColor: "#06f",
  },
});
