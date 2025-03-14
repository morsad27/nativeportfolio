import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import styles from "./styles/avatarStyle";
import { useTheme } from "../constants/themeManager";
import { Linking } from "react-native";

export default function Profile() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const openEmail = () => {
    Linking.openURL("mailto:almorsada.tagal@gmail.com");
  };

  const downloadPDF = () => {
    Linking.openURL("https://drive.google.com/uc?export=download&id=19Syn8U5StNVG1pMPu0tJAlh9M08vKCFK")
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.row}>
        <Image
          style={[isDarkMode ? styles.avatarDark : styles.avatar]}
          source={require("../assets/images/avatar.jpg")}
        />
        <View style={styles.paddingTop}>
          <Text style={[isDarkMode ? styles.nameDark : styles.name]}>
            Almorsad Tagal
          </Text>

          {/* Sub Info */}
          <View style={styles.locationRow}>
            <Image
              style={isDarkMode ? styles.locationIcon : styles.locationIconDark}
              source={require("../assets/images/loc-light.png")}
            />
            <Text style={[isDarkMode ? styles.subinfoDark : styles.subinfo]}>
              Taguig, Philippines
            </Text>
          </View>

          <Text style={[isDarkMode ? styles.subinfoDark : styles.subinfo]}>
            IT Intern
          </Text>

          <View style={styles.rowButton}>
            <TouchableOpacity onPress={openEmail}>
              <View style={[isDarkMode ? styles.buttonDark : styles.button]}>
                <Text style={[isDarkMode ? styles.buttontextDark : styles.buttontext]}>
                  Send Email
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={downloadPDF}>
              <View style={[isDarkMode ? styles.buttonDark : styles.button]}>
                <Text style={[isDarkMode ? styles.buttontextDark : styles.buttontext]}>
                  Download CV
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
