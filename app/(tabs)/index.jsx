import {
  Image,
  ScrollView,
  View,
  Text,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import styles from "../../styles/profileStyles";
import { useTheme } from "../../constants/themeManager";
import Avatar from "../../components/avatar";

const Profile = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ScrollView style={[isDarkMode ? styles.safeAreaDark : styles.safeArea]}>

      {/* Profile */}
      <View style={styles.maincontainer}>
        <Avatar />

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

        {/* Experience */}
        <View style={styles.about}>
          <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
            Experience
          </Text>
        </View>
        <View style={styles.flexrow}>
          <Image
            style={[isDarkMode ? styles.abouticonDark : styles.abouticon]}
            source={require("../../assets/images/circle-outline.png")}
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
            source={require("../../assets/images/line.png")}
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
            source={require("../../assets/images/circle-dark.png")}
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
    </ScrollView>
  );
};

export default Profile;
