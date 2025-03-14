import { Text, View, Image, ScrollView, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import styles from "../../styles/projectStyles";
import * as Linking from "expo-linking";
import { useTheme } from "../../constants/themeManager";
import Avatar from "../../components/avatar"
const Project = () => {
  const { theme } = useTheme(); // Get global theme
  const isDarkMode = theme === "dark";

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openProject = (url) => {
    Linking.openURL(url);
  };

  const openCertificate = (image) => {
    setSelectedCertificate(image);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={[isDarkMode ? styles.safeAreaDark : styles.safeArea]}>

        {/* Projects Section */}
        <View style={[isDarkMode ? styles.containerDark : styles.container]}>
          <View style={styles.about}>
            <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
              Recent Projects
            </Text>
          </View>

          {/* Project List */}
          <View style={styles.gridContainer2}>
            <Pressable
              style={[
                isDarkMode
                  ? styles.projectContainerDark
                  : styles.projectContainer,
              ]}
              onPress={() =>
                openProject("https://github.com/morsad27/final_pawtalk.git")
              }
            >
              <Image
                source={require("../../assets/images/pawtalk.png")}
                style={styles.projectImage}
                resizeMode="contain"
              />
              <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
                PawTalk
              </Text>
              <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
                Mobile Application for Pet Owners
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              style={[
                isDarkMode
                  ? styles.projectContainerDark
                  : styles.projectContainer,
              ]}
              onPress={() => openProject("https://webd-puce.vercel.app")}
            >
              <Image
                source={require("../../assets/images/ihubcollection.png")}
                style={styles.projectImage}
              />
              <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
                I-Hub Collection
              </Text>
              <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
                An E-commerce Website
              </Text>
            </Pressable>
          </View>

          {/* Certificates Section */}
          <View
            style={[isDarkMode ? styles.container2Dark : styles.container2]}
          >
            <View style={styles.about}>
              <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
                Certificates
              </Text>
            </View>

            {/* Certificate List */}
            <View >
              <Pressable
                style={[
                  isDarkMode
                    ? styles.projectContainerDark
                    : styles.projectContainer,
                ]}
                onPress={() =>
                  openCertificate(
                    require("../../assets/images/certificate1.png")
                  )
                }
              >
                <Image
                  source={require("../../assets/images/certificate1.png")}
                  style={styles.projectImage}
                />
                <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
                  HTML Fundamentals
                </Text>
                <Text
                  style={[isDarkMode ? styles.subtextDark : styles.subtext]}
                >
                  CodeCred
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal for Certificate Image */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContent}>
            {selectedCertificate && (
              <Image
                source={selectedCertificate}
                style={styles.certificateImage}
                resizeMode="contain"
              />
            )}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Project;
