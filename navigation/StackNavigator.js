import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Article from "../screens/Article";
import Settings from "../screens/Settings";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";

import AuthenticatedStack from "./AuthenticatedStack";
import UnauthenticatedStack from "./UnauthenticatedStack";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

// import { SettingsIcon } from "../resources/Icons";
import { MessageOutlined, Icon } from "@ant-design/icons";

const Stack = createStackNavigator();
const screenOptionStyle = {};

const SettingsIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ flexDirection: "row" }}
      onPress={() => navigation.navigate("Settings")}
    >
      <Image
        source={{
          uri: "https://img.icons8.com/cotton/64/000000/settings--v1.png",
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </TouchableOpacity>
  );
};
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
        headerBackTitle: " ",
      }}
    >
      <Stack.Screen
        name='Feed'
        component={Feed}
        options={{
          headerLeft: () => <SettingsIcon></SettingsIcon>,
        }}
      />
      <Stack.Screen name='Article' component={Article} />
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
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

export const AuthStackNavigator2 = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return <Splash />;
  }
  return user ? (
    <>
      <AuthenticatedStack />
    </>
  ) : (
    <>
      <UnauthenticatedStack />
    </>
  );
};
