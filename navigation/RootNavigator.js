import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AuthStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const tabBarOptionsStyle = {
  labelStyle: {
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  activeTintColor: "black",
  inactiveTintColor: "gray",
};

export default function RootNavigator() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptionsStyle}>
      <Tab.Screen name='Feed' component={MainStackNavigator} />
      <Tab.Screen name='Login' component={AuthStackNavigator} />
    </Tab.Navigator>
  );
}
