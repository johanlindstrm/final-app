import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SettingsIconDark, SettingsIconLight } from "./StackNavigator";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#000",
  headerBackTitle: "Back",
};

export default function UnauthenticatedStack() {
  const { theme } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundViewColor,
        },
        headerTintColor: theme.textColor,
        headerBackTitle: " ",
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerLeft: () => <SettingsIconLight />,
        }}
      />
    </Stack.Navigator>
  );
}
