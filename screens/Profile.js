import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../resources/styles/styles";
import { CustomButton } from "../components/Button";

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
        <CustomButton
          text={"SAVED ARTICLES"}
          onPress={() => {
            Alert.alert("No saved articles", "Sorry!");
          }}
        />
        <CustomButton
          text={"FAVORITES?"}
          onPress={() => {
            Alert.alert("Not available", "Sorry!");
          }}
        />
      </View>
      <CustomButton text={"SIGN OUT"} onPress={logOut} />
    </View>
  );
}
