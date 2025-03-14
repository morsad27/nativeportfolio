import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const isTablet = windowWidth > 600;

const containerMargin = isTablet ? "20%" : "5%";
const fontSizeLarge = isTablet ? 28 : 20;
const fontSizeMedium = isTablet ? 27 : 17;
const fontWeightTitle = isTablet ? "700" : "600";
const fontWeightSubtext = isTablet ? "500" : "400";

// container standard
const containerBase = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: containerMargin,
  padding: 15,
  borderWidth: 1,
  flexDirection: "column",
  paddingVertical: 15,
  minHeight: 60,
};

const subtextBase = {
  flex: 1,
  paddingHorizontal: 10,
  fontWeight: fontWeightSubtext,
  fontSize: fontSizeMedium,
  alignSelf: "center",
  textAlign: "center",
};

const containerStackBase = {
  borderWidth: 1,
  margin: 5,
  borderRadius: 20,
};

export default StyleSheet.create({
  maincontainer: {
    padding: 10,
    paddingBottom: 100,
  },

  container: {
    ...containerBase,
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  containerDark: {
    ...containerBase,
    marginTop: 40,
    backgroundColor: "#000",
    borderColor: "#06f",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  container2: {
    ...containerBase,
    flex: 1,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container2Dark: {
    ...containerBase,
    flex: 1,
    marginTop: 20,
    backgroundColor: "#000",
    borderColor: "#06f",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  about: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: fontWeightTitle,
    fontSize: fontSizeLarge,
  },
  titleDark: {
    fontWeight: fontWeightTitle,
    fontSize: fontSizeLarge,
    color: "#fff",
  },

  subtext: {
    ...subtextBase,
  },
  subtextDark: {
    ...subtextBase,
    color: "#fff",
  },

  flexrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: isTablet ? "5%" : 5,
  },

  containerstack: {
    ...containerStackBase,
  },
  containerstackDark: {
    ...containerStackBase,
    borderColor: "#06f",
  },
});
