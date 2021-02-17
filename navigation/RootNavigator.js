import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AuthStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={MainStackNavigator} />
      <Tab.Screen name='Login' component={AuthStackNavigator} />
    </Tab.Navigator>
  );
}
