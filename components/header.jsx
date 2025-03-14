import React from "react";
import {
  Image,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeProvider, useTheme } from "../constants/themeManager";
import styles from "./styles/headerStyles"

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ThemeProvider>
      <SafeAreaView>
        <View>
          <View
            style={[
              styles.switchContainer,
              { backgroundColor: isDarkMode ? "#000" : "#fff" },
            ]}
          >
            <View
              style={[
                styles.switchWrapper,
                { backgroundColor: isDarkMode ? "#fff" : "#000" },
              ]}
            >
              {/* Switch Component */}
              <Switch
                trackColor={{ false: "#000", true: "#fff" }}
                thumbColor={isDarkMode ? "#000" : "#06f"}
                ios_backgroundColor={isDarkMode ? "#fff" : "#000"}
                onValueChange={toggleTheme}
                value={isDarkMode}
                style={styles.switch}
              />

              {/* Custom Theme Toggle Button */}
              <TouchableOpacity
                onPress={toggleTheme}
                style={[
                  styles.switchIconWrapper,
                  isDarkMode ? styles.switchIconOn : styles.switchIconOff,
                ]}
              >
                <Image
                  source={
                    isDarkMode
                      ? require("../assets/images/circle-dark.png") // Dark Mode Icon
                      : require("../assets/images/circle-dark.png") // Light Mode Icon
                  }
                  style={
                    isDarkMode
                      ? styles.switchIconCircle
                      : styles.switchIconCircleDark
                  }
                />

                <Image
                  source={
                    isDarkMode
                      ? require("../assets/images/moon.png") // Dark Mode Icon
                      : require("../assets/images/sun.png") // Light Mode Icon
                  }
                  style={isDarkMode ? styles.switchIconDark : styles.switchIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default Header;
