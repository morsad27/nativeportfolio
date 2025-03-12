import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeProvider, useTheme } from "../constants/themeManager";

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

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: -5,
  },
  switchWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: "#000",
    borderColor: "#000",
    padding: 2,
  },
  switch: {
    width: 49,
    height: 29,
  },
  switchIconWrapper: {
    position: "absolute",
  },
  switchIcon: {
    top: -29,
    left: 1,
    width: 21,
    height: 23,
  },
  switchIconDark: {
    top: -29,
    left: -1,
    width: 21,
    height: 23,
  },
  switchIconCircle: {
    display: "flex",
    width: 29,
    height: 29,
    tintColor: "#000",
    left: -6,
    top: -3,
  },
  switchIconCircleDark: {
    display: "flex",
    width: 29,
    height: 29,
    tintColor: "#06f",
    left: -2,
    top: -3,
  },
  switchIconOn: {
    top: 5,
    left: "56%",
  },
  switchIconOff: {
    top: 5,
    left: 5,
  },
});
