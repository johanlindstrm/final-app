import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/Feed";
import Login from "../screens/Login";
const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Feed' component={Feed} />
    </Stack.Navigator>
  );
};

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};
