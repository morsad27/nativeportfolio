import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles/experienceStyle";
import { useTheme } from "../constants/themeManager";

export default function experience() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <View>
      {/* Experience */}
      <View style={styles.about}>
        <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
          Experience
        </Text>
      </View>

      <View style={styles.center}>
        <View style={styles.flexrow}>
          <Image
            style={[isDarkMode ? styles.abouticonDark : styles.abouticon]}
            source={require("../assets/images/circle-outline.png")}
          />
          <Text
            style={[isDarkMode ? styles.lowsubtitleDark : styles.lowsubtitle]}
          >
            IT Intern
          </Text>
        </View>
        <View style={styles.flexrow}>
          <Image
            style={[isDarkMode ? styles.lineiconDark : styles.lineicon]}
            source={require("../assets/images/line.png")}
          />
          <Text
            style={[
              isDarkMode ? styles.subExperienceDark : styles.subExperience,
            ]}
          >
            Taguig City Hall
          </Text>
        </View>
        <View style={styles.flexrow}>
          <Image
            style={[isDarkMode ? styles.blackiconDark : styles.blackicon]}
            source={require("../assets/images/circle-dark.png")}
          />
          <View style={styles.flexcolumn}>
            <Text
              style={[
                isDarkMode ? styles.lowsubtitle2Dark : styles.lowsubtitle2,
              ]}
            >
              BS Computer Science
            </Text>
            <Text
              style={[
                isDarkMode ? styles.subExperience2Dark : styles.subExperience2,
              ]}
            >
              Taguig City University
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
