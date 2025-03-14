import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  safeAreaDark: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    backgroundColor: "#000",
    marginTop: -1
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: -1
  },


  
  row: { margin: 10, gap: 15, flexDirection: "row" },
  flexrow: { display: "flex", flexDirection: "row" },
  container: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
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
    margin: 15,
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
    margin: 15,
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
    margin: 15,
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
  maincontainer: {
    padding: 10,
    paddingBottom: 100,
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
  subinfo: {
    marginTop: 0,
    flex: 1,
    flexDirection: "row",
    marginLeft: -5,
  },
  locationDark: {
    fontSize: 14,
    fontWeight: 400,
    color: "#fff",
  }, 
  location: {
    fontSize: 14,
    fontWeight: 400,
  },
  paddingTop: { paddingTop: 29 },
  paddingLeft: { paddingLeft: 50 },
  name: {
    fontWeight: 700,
    fontSize: 20,
  },
  nameDark: {
    fontWeight: 700,
    color: "#fff",
    fontSize: 20,
  },
  about: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  abouticon: {
    width: 30,
    height: 30,
    marginLeft: -2,
    marginTop: 15,
    tintColor: "#000",
  },
  
  abouticonDark: {
    width: 30,
    height: 30,
    marginLeft: -2,
    marginTop: 15,
    tintColor: "#06f",
  },
  subExperience: {
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 5,
    marginTop: -5,
    color: "#000",
  },
  subExperienceDark: {
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 5,
    marginTop: -5,
    color: "#fff",
  },
  flexcolumn: { display: "flex", flexDirection: "column" },
  subExperience2: {
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 10,
    color: "#000",
  },
  subExperience2Dark: {
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 10,
    color: "#fff",
  },
  lineicon: {
    width: 30,
    height: 80,
    marginTop: -10,
    marginLeft: -2,
    tintColor: "#000",
  },
  
  lineiconDark: {
    width: 30,
    height: 80,
    marginTop: -10,
    marginLeft: -2,
    tintColor: "#06f",
  },
  blackicon: {
    width: 20,
    height: 20,
    marginTop: -10,
    marginLeft: 3,
    tintColor: "#000",
  },
  blackiconDark: {
    width: 20,
    height: 20,
    marginTop: -10,
    marginLeft: 3,
    tintColor: "#06f",
  },
  profile: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderRadius: 60,
    marginLeft: 10,
  },
  profileDark: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderRadius: 60,
    marginLeft: 10,
    borderColor: "#06f"
  },
  smallicon: {
    height: 20,
    width: 20,
  },
  mediumicon: {
    height: 25,
    width: 25,
  },
  subtext: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: 400,
    fontSize: 17,
    alignSelf: "center",
    textAlign: "center",
  },
  subtextDark: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: 400,
    fontSize: 17,
    alignSelf: "center",
    textAlign: "center",
    color: "#fff"
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    gap: 2,
  },
  titleDark: {
    fontWeight: 600,
    fontSize: 20,
    gap: 2,
    color: "#fff"
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 18,
  },
  lowsubtitle: {
    fontWeight: 500,
    fontSize: 20,
    paddingTop: 10,
    marginTop: 5,
    paddingLeft: 5,
    color: "#000",
  },
  
  lowsubtitleDark: {
    fontWeight: 500,
    fontSize: 20,
    paddingTop: 10,
    marginTop: 5,
    paddingLeft: 5,
    color: "#fff",
  },
  lowsubtitle2: {
    fontWeight: 500,
    fontSize: 20,
    paddingTop: 10,
    marginTop: -25,
    paddingLeft: 10,
    color: "#000",
  },
  lowsubtitle2Dark: {
    fontWeight: 500,
    fontSize: 20,
    paddingTop: 10,
    marginTop: -25,
    paddingLeft: 10,
    color: "#fff",
  },
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
  emailtext: {
    color: "#FFF",
    fontWeight: 300,
    fontSize: 14,
  },
  emailtextDark: {
    color: "#000",
    fontWeight: 300,
    fontSize: 14,
  },
  // for animation (optional)
  image: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 5, // Adjust position on switch
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
    left: 32, // Adjust this value based on your thumb position
  },
  switchIconOff: {
    top: 3,
    left: 3, // Adjust this value based on your thumb position
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
    borderColor: "#fff"
  },
});