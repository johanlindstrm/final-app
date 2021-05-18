import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { signOut } = useContext(AuthContext);

  const logOut = () => {
    signOut();
    console.log("sign out button pressed");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={logOut}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}> SIGN OUT </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SAVED</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>FAVORITES</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'yellow',
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
