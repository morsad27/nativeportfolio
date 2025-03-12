import { Stack } from "expo-router/stack";
import { ThemeProvider } from "../constants/themeManager";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
