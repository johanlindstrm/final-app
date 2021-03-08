import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#000",
  headerBackTitle: "Back",
};

export default function UnauthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}
