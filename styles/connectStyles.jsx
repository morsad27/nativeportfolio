import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const isTablet = windowWidth > 600;

export default StyleSheet.create({
  // connect styless
  row: { display: "flex", flexDirection: "row", justifyContent: "center" },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    marginTop: -1,
    paddingBottom: isTablet ? "10%" : "20%",
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: "#000",
    padding: 12,
    marginTop: -1,
    paddingBottom: isTablet ? "10%" : "20%",
  },

  flexend: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    margin: 5,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
  },
  containerDark: {
    margin: 5,
    padding: 15,
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
    borderColor: "#06f",
  },

  container1: {
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
  },
  container1Dark: {
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
    borderColor: "#06f",
  },

  container2: {
    alignItems: "center",
    marginTop: -10,
    margin: 0,
    padding: 15,
    gap: 10,
  },
  socialcontainer: {
    margin: 15,
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 15,
    gap: 10,
  },
  igsocialcontainer: {
    margin: 15,
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
  },
  gridContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-between", // Ensures even spacing
  },
  projectContainer: {
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 80,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 80,
    minWidth: 80,
  },
  projectContainerDark: {
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 80,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 80,
    minWidth: 80,
    borderColor: "#06f",
  },
  about: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  abouticon1: {
    borderRadius: 60,
    height: isTablet ? 70 : 35,
    width: isTablet ? 70 : 35,
  },
  abouticon: {
    height: isTablet ? 70 : 35,
    width: isTablet ? 70 : 35,
  },
  socialicon: {
    height: isTablet ? 110 : 55,
    width: isTablet ? 110 : 55,
  },
  arrowicon: {
    height: 20,
    width: 20,
  },
  subtext: {
    fontWeight: "300",
    fontSize: isTablet ? 36 : 18,
    color: "#000",
  },
  subtextDark: {
    fontWeight: "300",
    fontSize: isTablet ? 36 : 18,
    color: "#fff",
  },
  submit:{
    alignSelf: 'center',
    fontSize: isTablet ? 32 : 16,
    color: "#06f",
  },
  subtextitalic: {
    fontWeight: "300",
    fontSize: isTablet ? 36 : 18,
    fontStyle: "italic",
  },
  subtextitalicDark: {
    fontWeight: "300",
    fontSize: isTablet ? 36 : 18,
    fontStyle: "italic",
    color: "#fff",
  },
  submain: {
    paddingHorizontal: isTablet ? "20%" : "10%",
    paddingTop: 10,
  },
  lowsubtext: {
    fontWeight: "300",
    fontSize: 16,
  },
  title: {
    fontWeight: "500",
    fontSize: isTablet ? 44 : 22,
  },
  titleDark: {
    fontWeight: "500",
    fontSize: isTablet ? 44 : 22,
    color: "#fff",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: isTablet ? 40 : 20,
    marginTop: 2,
  },
  subtitleDark: {
    fontWeight: "400",
    fontSize: isTablet ? 40 : 20,
    marginTop: 2,
    color: "#fff",
  },

  // for animation (optional)
  image: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 5,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  imageEnabled: {
    left: 26,
  },
  // switch design
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },
  switchIconOn: {
    top: 3,
    left: 32,
  },
  switchIconOff: {
    top: 3,
    left: 3,
  },
  switch: {
    width: 49,
    height: 29,
  },
  switchIcon: {
    position: "absolute",
    width: 23,
    height: 23,
  },
  switchWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: "#000",
    borderColor: "#fff",
  },
  emailButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 3,
    paddingHorizontal: 10,
    gap: 5,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
  },
  emailButtonDark: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 3,
    paddingHorizontal: 10,
    gap: 5,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#fff",
  },
  smallicon: {
    height: 20,
    width: 20,
  },
  emailtext: {
    color: "#FFF",
    fontWeight: 300,
    fontSize: isTablet ? 22 : 14,
  },
  emailtextDark: {
    color: "#000",
    fontWeight: 300,
    fontSize: isTablet ? 22 : 14,
  },
});
