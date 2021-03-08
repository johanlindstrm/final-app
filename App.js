import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
