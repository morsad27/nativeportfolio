import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log({ windowWidth, windowHeight });

export default StyleSheet.create({
  maincontainer: {
    //main View
    padding: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  row: {
    //to row the profile block and detail block
    margin: 10,
    gap: 15,
    flexDirection: "row",
  },

  avatar: {
    //light theme avatar design
    height: windowWidth > 600 ? 160 : 120,
    width: windowWidth > 600 ? 160 : 120,
    borderWidth: 1,
    borderRadius: windowWidth > 600 ? 120 : 60,
  },

  avatarDark: {
    //dark theme avatar design
    height: windowWidth > 600 ? 160 : 120,
    width: windowWidth > 600 ? 160 : 120,
    borderWidth: 1,
    borderRadius: windowWidth > 600 ? 120 : 60,
    borderColor: "#06f",
  },

  paddingTop: {
    //for adding padding top on name
    paddingTop: windowWidth > 600 ? 30 : 20,
  },

  name: {
    // light theme fullname style
    fontWeight: 700,
    fontSize: windowWidth > 600 ? 30 : 20,
  },

  nameDark: {
    //dark theme fullname style
    fontWeight: 700,
    fontSize: windowWidth > 600 ? 30 : 20,
    color: "#fff",
  },

  locationRow: {
    //location row style
    flexDirection: "row",
    marginLeft: -5,
  },

  locationIcon: {
    //location size
    height: windowWidth > 600 ? 30 : 20,
    width: windowWidth > 600 ? 30 : 20,
    tintColor: "#06f",
  },

  locationIconDark: {
    //dark theme location size
    height: windowWidth > 600 ? 30 : 20,
    width: windowWidth > 600 ? 30 : 20,
    tintColor: "#000",
  },

  subinfo: {
    //style for location and position
    fontSize: windowWidth > 600 ? 20 : 14,
    fontWeight: 400,
  },

  subinfoDark: {
    //dark theme
    fontSize: windowWidth > 600 ? 20 : 14,
    fontWeight: 400,
    color: "#fff",
  },

  rowButton: {
    //to row the button block and detail block
    margin: 1,
    gap: 5,
    flexDirection: "row",
  },

  button: {
    //button container design
    backgroundColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 3,
    paddingHorizontal: 5,
    gap: windowWidth > 600 ? 10 : 5,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
  },

  buttonDark: {
    //for dark theme
    backgroundColor: "#fff",
    borderRadius: windowWidth > 600 ? 8 : 5,
    borderWidth: 1,
    marginTop: 3,
    paddingHorizontal: 5,
    gap: windowWidth > 600 ? 10 : 5,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#fff",
  },

  buttontext: {
    //
    color: "#FFF",
    fontWeight: windowWidth > 600 ? 500 : 300,
    fontSize: windowWidth > 600 ? 18 : 14,
  },

  buttontextDark: {
    color: "#000",
    fontWeight: windowWidth > 600 ? 500 : 300,
    fontSize: windowWidth > 600 ? 18 : 14,
  },
});
