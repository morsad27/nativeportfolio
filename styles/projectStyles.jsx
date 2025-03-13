import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //work styless ````
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    marginTop:-1
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: "#000",
    padding: 12,
    marginTop: -1
  },
  maincontainer: {
    paddingBottom: 100,
  },
  flexend: {
    display: "flex-end",
    flexDirection: "row",
    marginRight: "10%",
    alignSelf: "flex-end",
    position: "relative",
  },
  container: {
    marginTop: 20,
    flex: 1,
    margin: 15,
    padding: 15,
    backgroundColor: "#fff",
    gap: 10,
    marginBottom: 100,
  },
  containerDark: {
    marginTop: 20,
    flex: 1,
    margin: 15,
    padding: 15,
    backgroundColor: "#000",
    gap: 10,
    marginBottom: 100,
  },
  container2: {
    marginTop: 20,
    flex: 1,
    margin: 15,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: "20%",
    gap: 10,
  },
  containerDark2: {
    marginTop: 20,
    marginBottom: "20%",
    flex: 1,
    margin: 15,
    padding: 15,
    backgroundColor: "#000",
    gap: 10,
  },
  gridContainer: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
    justifyContent: "space-between", // Ensures even spacing
  },
  projectImage: {
  width: "100%", // Adjust width as needed
  height: 150, // Adjust height as needed
  borderRadius: 10,
  marginBottom: 10,
},
  gridContainer2: { justifyContent: "space-between", gap: 20, display: 'flex', },
  projectContainer: {
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
  },
  projectContainerDark: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#06f"
  },
  about: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 0
  },
  abouticon: {
    height: 25,
    width: 25,
  },
  arrowicon: {
    height: 20,
    width: 20,
    marginRight: "-10%",
  },
  subtext: {
    fontWeight: "400",
    fontSize: 17,
  },
  subtextDark: {
    fontWeight: "400",
    fontSize: 17,
    color: "#fff"
  },
  lowsubtext: {
    fontWeight: 300,
    fontSize: 16,
  },
  maintitle: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
  },
  maintitleDark: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  title: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
  },
  titleDark: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  projectimages:{
    borderColor: "#000",
    height: 300,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },  
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

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "99%",
  },
  certificateImage: {
    width: "100%",
    height: 300,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
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