import {
    Image,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Linking,
    Button,
    Alert,
    ActivityIndicator,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
//   import * as FileSystem from "expo-file-system";
//   import * as Sharing from "expo-sharing";
  import { icons } from "../../constants/themeManager";
  import styles from "../../styles/profileStyles";
  import { useTheme } from "../../constants/themeManager";
  
  const Profile = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    const [loading, setLoading] = useState(false);
  
    const openEmail = () => {
      Linking.openURL("mailto:almorsada.tagal@gmail.com");
    };
  
    return (
      <ScrollView style={[isDarkMode ? styles.safeAreaDark : styles.safeArea]}>
        <StatusBar style="auto" />
  
        {/* Profile */}
        <View style={styles.maincontainer}>
          <View style={styles.row}>
            <Image
              style={[isDarkMode ? styles.profileDark : styles.profile]}
              source={require("../../assets/images/avatar.jpg")}
            />
            <View style={styles.paddingTop}>
              <Text style={[isDarkMode ? styles.nameDark : styles.name]}>
                Almorsad Tagal
              </Text>
  
              {/* Sub Info */}
              <View style={styles.subinfo}>
                <Image
                  style={styles.smallicon}
                  source={
                    isDarkMode
                      ? require("../../assets/images/loc-light.png")
                      : require("../../assets/images/loc-dark.png")
                  }
                />
                <Text
                  style={[isDarkMode ? styles.locationDark : styles.location]}
                >
                  Taguig, Philippines
                </Text>
              </View>
  
              <Text style={[isDarkMode ? styles.locationDark : styles.location]}>
                IT Intern
              </Text>
  
              <TouchableOpacity onPress={openEmail}>
                <View
                  style={[isDarkMode ? styles.emailButtonDark : styles.emailButton]}
                >
                  <Image
                    style={styles.smallicon}
                    source={
                      isDarkMode
                        ? require("../../assets/images/mail-dark.png")
                        : require("../../assets/images/mail-light.png")
                    }
                  />
                  <Text style={[isDarkMode ? styles.emailDark : styles.emailtext]}>
                    Send Email
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
  
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
  
          {/* Experience */}
          <View style={styles.about}>
            <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
              Experience
            </Text>
          </View>
          <View style={styles.flexrow}>
            <Image
              style={[isDarkMode ? styles.abouticonDark : styles.abouticon]}
            //   source={icons.circleoOutline}
            />
            <Text style={[isDarkMode ? styles.lowsubtitleDark : styles.lowsubtitle]}>
              IT Intern
            </Text>
          </View>
          <View style={styles.flexrow}>
            <Image
              style={[isDarkMode ? styles.lineiconDark : styles.lineicon]}
            //   source={icons.line}
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
            //   source={icons.circleDark}
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