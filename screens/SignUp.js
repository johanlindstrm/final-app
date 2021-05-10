import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const registerPressed = () => {
    console.log("submitted user register");
    // logIn(email, password);
    registerUser(email, password);
  };

  const navigateSignUp = () => {
    console.log("Sign Up page pressed");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Register User</Text>
      </View>
      <View style={{ flex: 1.5, width: "100%", alignItems: "center" }}>
        <TextInput
          placeholder='name@email.com'
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
          returnKeyType={"next"}
          autoCompleteType={"off"}
          clearButtonMode={"always"}
          keyboardAppearance={"dark"}
        />
        <TextInput
          placeholder='Enter password'
          value={password}
          onChangeText={setPassword}
          style={styles.inputStyle}
          returnKeyType={"done"}
          autoCompleteType={"off"}
          clearButtonMode={"always"}
          keyboardAppearance={"dark"}
        />
        <TouchableOpacity
          style={styles.customButton}
          onPress={registerPressed}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={navigateSignUp}
        >
          <Text>Sign up with email?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputStyle: {
    padding: 15,
    backgroundColor: "#DCDCDC",
    marginBottom: 15,
    width: 360,
    borderRadius: 5,
  },

  header: {
    color: "#000",
    fontSize: 42,
    fontWeight: "700",
    paddingTop: 230,
  },

  headerContainer: {
    flex: 1.2,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  customButton: {
    width: 360,
    height: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
