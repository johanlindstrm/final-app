import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useContext(AuthContext);

  const submit = () => {
    console.log("submitted log in");
    logIn(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>News App</Text>
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
          onPress={submit}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
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
    padding: 10,
    backgroundColor: "#DCDCDC",
    marginBottom: 15,
    width: 300,
    borderRadius: 5,
  },

  header: {
    color: "#2bae6f",
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
    width: 300,
    height: 45,
    backgroundColor: "#996633",
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
