import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { SettingsIconDark, SettingsIconLight } from "./StackNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2bae6f",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

export default function AuthenticatedStack() {
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
        name='Profile'
        component={Profile}
        options={{
          headerLeft: () => <SettingsIconDark />,
        }}
      />
    </Stack.Navigator>
  );
}
