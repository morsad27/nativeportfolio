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
import About from "../../components/about"
import Experience from "../../components/experience";

const Profile = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ScrollView style={[isDarkMode ? styles.safeAreaDark : styles.safeArea]}>
      {/* Profile */}
      <View style={styles.maincontainer}>
        <Avatar />
        <About />
        <Experience />
      </View>
    </ScrollView>
  );
};

export default Profile;
