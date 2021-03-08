import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2bae6f",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

export default function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
}
