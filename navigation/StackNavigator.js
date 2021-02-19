import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import Login from "../screens/Login";
import Article from "../screens/Article";
import Settings from "../screens/Settings";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Stack = createStackNavigator();
const screenOptionStyle = {};

export const MainStackNavigator = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColor,
        },
        headerTintColor: theme.textColor,
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name='Feed'
        component={Feed}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate("Settings")}
              title='+'
              color={theme.textColor}
            />
          ),
        }}
      />
      <Stack.Screen name='Article' component={Article} />
      <Stack.Screen name='Settings' component={Settings} />
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
