import {
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../../styles/connectStyles";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useTheme } from "../../constants/themeManager"
const Connect = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async () => {
    if (!email || !name || !message) {
      setErrorMessage("Error: Email, Name, and Message are required!");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_pbl6dk7",
        "template_ncigrwi",
        { name, email, message },
        "JB8y1DZoZyitAE9Iv"
      );

      console.log("SUCCESS!", response);
      window.alert("Success! Your message has been sent.");
      setEmail("");
      setName("");
      setMessage("");
      setErrorMessage("");
    } catch (err) {
      console.error("ERROR", err);
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  // Open links in the browser
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const { theme } = useTheme("dark");
  const isDarkMode = theme === "dark";

  const openEmailPakir = () => {
    Linking.openURL(
      "https://mail.google.com/mail/?view=cm&fs=1&to=michaellpakir@gmail.com"
    )
  }

  const openEmailGamba = () => {
    Linking.openURL(
      "https://mail.google.com/mail/?view=cm&fs=1&to=joelgamba04@gmail.com"
    )
  }
  return (
    <ScrollView style={[isDarkMode ? styles.safeAreaDark : styles.safeArea]}>
      <View style={styles.submain}>
        <View style={styles.about}>
          <Image
            style={styles.abouticon}
            source={
              isDarkMode
                ? require("../../assets/images/mail-light.png")
                : require("../../assets/images/mail-dark.png")
            }
          />
          <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
            Connect with me
          </Text>
        </View>

        <View style={[isDarkMode ? styles.container1Dark : styles.container1]}>
          <View style={[isDarkMode ? styles.containerDark : styles.container]}>
            <TextInput
              style={[isDarkMode ? styles.subtextDark : styles.subtext]}
              placeholderTextColor={isDarkMode ? "#FFF" : "#000"}
              placeholder="Your Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={[isDarkMode ? styles.containerDark : styles.container]}>
            <TextInput
              style={[isDarkMode ? styles.subtextDark : styles.subtext]}
              keyboardType="email-address"
              placeholderTextColor={isDarkMode ? "#FFF" : "#000"}
              placeholder="Your Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={[isDarkMode ? styles.containerDark : styles.container]}>
            <TextInput
              style={[
                isDarkMode ? styles.subtextDark : styles.subtext,
                { height: 100 },
              ]}
              placeholder="Your Message"
              placeholderTextColor={isDarkMode ? "#FFF" : "#000"}
              value={message}
              onChangeText={setMessage}
              multiline
            />
          </View>
          {errorMessage ? (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              {errorMessage}
            </Text>
          ) : null}
          <Button title="Submit" onPress={onSubmit} />
        </View>

        <View style={styles.about}>
          <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
            Social Links
          </Text>
        </View>

        <View style={styles.row}>
          {/* LinkedIn */}
          <TouchableOpacity
            onPress={() =>
              openLink("https://www.linkedin.com/in/tagal-almorsad-634682347")
            }
          >
            <View style={[styles.socialcontainer]}>
              <Image
                style={styles.socialicon}
                source={require("../../assets/images/li.png")}
              />
            </View>
          </TouchableOpacity>

          {/* GitHub */}
          <TouchableOpacity
            onPress={() => openLink("https://github.com/morsad27")}
          >
            <View style={[styles.socialcontainer, { minWidth: "20%" }]}>
              <Image
                style={styles.socialicon}
                source={require("../../assets/images/gh.png")}
              />
            </View>
          </TouchableOpacity>

          {/* Instagram */}
          <TouchableOpacity
            onPress={() => openLink("https://www.instagram.com/moresad_27")}
          >
            <View style={styles.socialcontainer}>
              <Image
                style={styles.socialicon}
                source={require("../../assets/images/ig.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Image
            style={styles.abouticon}
            source={
              isDarkMode
                ? require("../../assets/images/mail-light.png")
                : require("../../assets/images/mail-dark.png")
            }
          />
          <Text style={[isDarkMode ? styles.subtitleDark : styles.subtitle]}>
            almorsada.tagal@gmail.com
          </Text>
        </View>

        <View style={styles.row}>
          <Image
            style={styles.abouticon1}
            source={require("../../assets/images/phone.png")}
          />
          <Text style={[isDarkMode ? styles.subtitleDark : styles.subtitle]}>
            +6394 749 37111
          </Text>
        </View>

        <View style={[styles.about, styles.submain]}>
          <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
            References
          </Text>
        </View>

        <View style={styles.container2}>
          <View
            style={[
              isDarkMode
                ? styles.projectContainerDark
                : styles.projectContainer,
            ]}
          >
            <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
              Joel Gamba
            </Text>
            <Text
              style={[
                isDarkMode ? styles.subtextitalicDark : styles.subtextitalic,
              ]}
            >
              Internship Mentor
            </Text>
            <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
              09293121202
            </Text>
            
          <TouchableOpacity onPress={() => openEmailGamba()}>
            <View
              style={[isDarkMode ? styles.emailButtonDark : styles.emailButton]}
            >
              <Text style={[isDarkMode ? styles.emailDark : styles.emailtext]}>
                Send Email
              </Text>
            </View>
          </TouchableOpacity>
          </View>
          <View
            style={[
              isDarkMode
                ? styles.projectContainerDark
                : styles.projectContainer,
            ]}
          >
            <Text style={[isDarkMode ? styles.titleDark : styles.title]}>
              Michael Pakir
            </Text>
            <Text
              style={[
                isDarkMode ? styles.subtextitalicDark : styles.subtextitalic,
              ]}
            >
              Team Mate
            </Text>
            <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
              09460995848
            </Text>
            {/* <Text style={[isDarkMode ? styles.subtextDark : styles.subtext]}>
              michaellpakir@gmail.com
            </Text> */}
            
          <TouchableOpacity onPress={() => openEmailPakir()}>
            <View
              style={[isDarkMode ? styles.emailButtonDark : styles.emailButton]}
            >
              <Text style={[isDarkMode ? styles.emailDark : styles.emailtext]}>
                Send Email
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Connect;