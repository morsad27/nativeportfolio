import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const isTablet = windowWidth > 600;

const avatarSize = isTablet ? 160 : 120;
const borderRadius = isTablet ? 120 : 60;
const fontSizeLarge = isTablet ? 30 : 20;
const fontSizeSmall = isTablet ? 20 : 14;
const buttonGap = isTablet ? 10 : 5;
const buttonRadius = isTablet ? 8 : 5;

export default StyleSheet.create({
  maincontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  row: {
    margin: 10,
    gap: 15,
    flexDirection: "row",
  },

  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderWidth: 1,
    borderRadius: borderRadius,
  },

  avatarDark: {
    height: avatarSize,
    width: avatarSize,
    borderWidth: 1,
    borderRadius: borderRadius,
    borderColor: "#06f",
  },

  paddingTop: {
    paddingTop: isTablet ? 30 : 20,
  },

  name: {
    fontWeight: "700",
    fontSize: fontSizeLarge,
  },

  nameDark: {
    fontWeight: "700",
    fontSize: fontSizeLarge,
    color: "#fff",
  },

  locationRow: {
    flexDirection: "row",
    marginLeft: -5,
  },

  locationIcon: {
    height: fontSizeLarge,
    width: fontSizeLarge,
    tintColor: "#06f",
  },

  locationIconDark: {
    height: fontSizeLarge,
    width: fontSizeLarge,
    tintColor: "#000",
  },

  subinfo: {
    fontSize: fontSizeSmall,
    fontWeight: "400",
  },

  subinfoDark: {
    fontSize: fontSizeSmall,
    fontWeight: "400",
    color: "#fff",
  },

  rowButton: {
    margin: 1,
    gap: 5,
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#000",
    borderRadius: buttonRadius,
    marginTop: 3,
    paddingHorizontal: 5,
    gap: buttonGap,
    alignSelf: "flex-start",
    borderColor: "#000",
    borderWidth: 1,
  },

  buttonDark: {
    backgroundColor: "#fff",
    borderRadius: buttonRadius,
    marginTop: 3,
    paddingHorizontal: 5,
    gap: buttonGap,
    alignSelf: "flex-start",
    borderColor: "#fff",
    borderWidth: 1,
  },

  buttontext: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: fontSizeSmall,
  },

  buttontextDark: {
    color: "#000",
    fontWeight: "500",
    fontSize: fontSizeSmall,
  },
});
