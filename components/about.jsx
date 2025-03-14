import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "../constants/themeManager";
import styles from "./styles/aboutStyle";

export default function about() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View>
      {/* About Section */}
      <View style={[isDarkMode ? styles.containerDark : styles.container]}>
        <View style={styles.about}>
          <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
            About
          </Text>
        </View>
        <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
          I'm an IT Intern with experience in web, mobile, and desktop
          development. Currently, I'm focused on React Native.
        </Text>
      </View>
      
      {/* Tech Stack */}
      <View style={[isDarkMode ? styles.container2Dark : styles.container2]}>
        <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
          Tech Stack
        </Text>
        <View style={styles.flexcolumn}>
          <View style={styles.flexrow}>
            {["HTML", "CSS", "JavaScript"].map((tech) => (
              <View
                key={tech}
                style={[
                  isDarkMode
                    ? styles.containerstackDark
                    : styles.containerstack,
                ]}
              >
                <Text
                  style={[isDarkMode ? styles.subtextDark : styles.subtext]}
                >
                  {tech}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.flexrow}>
          {["React.js", "React Native"].map((tech) => (
            <View
              key={tech}
              style={[
                isDarkMode ? styles.containerstackDark : styles.containerstack,
              ]}
            >
              <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
                {tech}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
