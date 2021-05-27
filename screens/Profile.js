import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../resources/styles/styles";

export default function Profile() {
  const { signOut } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const logOut = () => {
    signOut();
    console.log("sign out button pressed");
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundViewColor,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.customButton,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <Text style={{ ...styles.buttonText, color: theme.textColor }}>
            SPARADE ARTIKLAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.customButton,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <Text style={{ ...styles.buttonText, color: theme.textColor }}>
            FAVORITES
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          ...styles.customButton,
          backgroundColor: theme.backgroundColor,
        }}
        onPress={logOut}
        activeOpacity={0.7}
      >
        <Text style={{ ...styles.buttonText, color: theme.textColor }}>
          SIGN OUT
        </Text>
      </TouchableOpacity>
    </View>
  );
}
