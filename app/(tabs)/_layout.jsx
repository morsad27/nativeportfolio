import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import { Tabs } from "expo-router";
import Header from "../../components/header";
import { useTheme } from "../../constants/themeManager";

export default function TabLayout() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
    
  return (
    <>
    <Header />
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#06f",
          tabBarInactiveTintColor: isDarkMode ? "#fff" : "#000",
          tabBarStyle: {
            height: 75,
            backgroundColor: isDarkMode ? "#000" : "#fff",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="projects"
          options={{
            headerShown: false,
            title: "Projects",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="briefcase"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="connect"
          options={{
            headerShown: false,
            title: "Connect",
            tabBarIcon: ({ color }) => (
              <Foundation name="mail" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
