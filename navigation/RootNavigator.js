import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  AuthStackNavigator2,
  UrgentStackNavigator,
} from "./StackNavigator";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

// const tabBarOptionsStyle = {
//   labelStyle: {
//     fontSize: 14,
//     margin: 0,
//     padding: 0,
//   },
//   activeTintColor: "black",
//   inactiveTintColor: "gray",
//   activeBackgroundColor: "black",
//   inactiveBackgroundColor: "red",
//   style: {
//     backgroundColor: theme.backgroundColor,
//   },
// };

export default function RootNavigator() {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      // tabBarOptions={tabBarOptionsStyle}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        activeTintColor: theme.textColor,
        inactiveTintColor: "gray",
        style: {
          backgroundColor: theme.backgroundColor,
        },
      }}
    >
      <Tab.Screen name='Feed' component={MainStackNavigator} />
      <Tab.Screen name='Login' component={AuthStackNavigator2} />
      <Tab.Screen name='Urgent' component={UrgentStackNavigator} />
    </Tab.Navigator>
  );
}
