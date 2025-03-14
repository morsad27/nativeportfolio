import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const isTablet = windowWidth > 600;

export default StyleSheet.create({
  //work styless ````
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    marginTop: -1,
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: "#000",
    padding: 12,
    marginTop: -1,
  },

  container: {
    marginTop: 20,
    flex: 1,
    margin: isTablet ? 65 : 15,
    padding: isTablet ? 65 : 15,
    backgroundColor: "#fff",
    gap: 10,
    marginBottom: 100,
  },
  containerDark: {
    marginTop: 20,
    flex: 1,
    margin: isTablet ? 65 : 15,
    padding: isTablet ? 65 : 15,
    backgroundColor: "#000",
    gap: 10,
    marginBottom: 100,
  },
  
  container2: {
    marginTop: isTablet ? "20%" : "10%",
    marginBottom: "20%",
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  container2Dark: {
    marginTop: isTablet ? "20%" : "10%",
    marginBottom: "20%",
    flex: 1,
    backgroundColor: "#000",
    gap: 10,
  },
  about: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 0,
  },

  title: {
    color: "#000",
    fontWeight: "700",
    fontSize: isTablet ? 40 : 20,
  },
  titleDark: {
    color: "#fff",
    fontWeight: "700",
    fontSize: isTablet ? 40 : 20,
  },


  projectContainer: {
    padding: isTablet ? 20 : 10,
    backgroundColor: "#FFF",
    borderRadius: isTablet ? 20 : 10,
    borderWidth: 1,
  },
  projectContainerDark: {
    padding: isTablet ? 20 : 10,
    backgroundColor: "#000",
    borderRadius: isTablet ? 20 : 10,
    borderWidth: 1,
    borderColor: "#06f",
  },

  projectImage: {
    width: "90%", 
    height: isTablet ? 300 : 150, 
    borderRadius: 10,
    marginBottom: 10,
  },
  
  subtext: {
    fontWeight: "400",
    fontSize: isTablet ? 27 : 17,
  },
  subtextDark: {
    fontWeight: "400",
    fontSize: isTablet ? 27 : 17,
    color: "#fff",
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
    height: isTablet ? 600 : 300,
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
  container: {
    marginTop: 20,
    flex: 1,
    margin: isTablet ? 65 : 15,
    padding: isTablet ? 65 : 15,
    backgroundColor: "#fff",
    gap: 10,
    marginBottom: 100,
  },
  
});
