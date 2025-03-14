import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({

  about: {
    marginTop: "10%",
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
  
  flexrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth > 600 ? "5%" : 5,
  },
  
  abouticon: {
    width: windowWidth > 600 ? 45 : 30,
    height: windowWidth > 600 ? 45 : 30,
    marginLeft: -2,
    marginTop: 15,
    tintColor: "#000",
  },
  abouticonDark: {
    width: windowWidth > 600 ? 45 : 30,
    height: windowWidth > 600 ? 45 : 30,
    marginLeft: -2,
    marginTop: 15,
    tintColor: "#06f",
  }, 
  
  lowsubtitle: {
    fontWeight: windowWidth > 600 ? 600 : 500,
    fontSize: windowWidth > 600 ? 28 : 20,
    paddingTop: 10,
    marginTop: 5,
    paddingLeft: 5,
    color: "#000",
  },
  lowsubtitleDark: {
    fontWeight: windowWidth > 600 ? 600 : 500,
    fontSize: windowWidth > 600 ? 28 : 20,
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
  
  lineicon: {
    width: windowWidth > 600 ? 45 : 30,
    height: windowWidth > 600 ? 120 : 80,
    marginTop: windowWidth > 600 ? -15 : -10,
    marginBottom: "-2%",
    marginLeft: -2,
    tintColor: "#000",
  },
  lineiconDark: {
    width: windowWidth > 600 ? 45 : 30,
    height: windowWidth > 600 ? 120 : 80,
    marginTop: windowWidth > 600 ? -15 : -10,
    marginBottom: "-2%",
    marginLeft: -2,
    tintColor: "#06f",
  },
  
  subExperience: {
    fontSize: windowWidth > 600 ? 22 : 16,
    fontWeight: windowWidth > 600 ? 500 : 400,
    paddingLeft: 5,
    marginTop: windowWidth > 600 ? -80 : -50,
    color: "#000",
  },
  subExperienceDark: {
    fontSize: windowWidth > 600 ? 22 : 16,
    fontWeight: windowWidth > 600 ? 500 : 400,
    paddingLeft: 5,
    marginTop: windowWidth > 600 ? -80 : -50,
    color: "#fff",
  },
  
  blackicon: {
    width: windowWidth > 600 ? 30 : 20,
    height: windowWidth > 600 ? 30 : 20,
    marginTop: windowWidth > 600 ? -22 : -28,
    marginLeft: windowWidth > 600 ? 6 : 4,
    tintColor: "#000",
  },
  blackiconDark: {
    width: windowWidth > 600 ? 30 : 20,
    height: windowWidth > 600 ? 30 : 20,
    marginTop: windowWidth > 600 ? -22 : -28,
    marginLeft: windowWidth > 600 ? 6 : 4,
    tintColor: "#06f",
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
    marginTop: -15,
    paddingLeft: 10,
    color: "#fff",
  },

  subExperience2: {
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 10,
    color: "#000",
  },
  subExperience2Dark: {
    fontSize: windowWidth > 600 ? 22 : 16,
    fontWeight: windowWidth > 600 ? 500 : 400,
    paddingLeft: 10,
    color: "#fff",
  },

  center:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    paddingLeft: windowWidth > 600 ? "20%" : "5%"
  }
});
