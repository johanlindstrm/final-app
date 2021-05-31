import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
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
