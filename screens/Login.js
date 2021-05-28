import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CustomButton } from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../resources/styles/styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  const submit = () => {
    console.log("submitted log in");
    logIn(email, password);
  };

  const navigateSignUp = () => {
    console.log("Sign Up page pressed");
    navigation.navigate("SignUp");
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundViewColor,
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={{ ...styles.header, color: theme.textColor }}>
          News App
        </Text>
      </View>
      <View
        style={{
          flex: 1.4,
          width: "100%",
          alignItems: "center",
        }}
      >
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
        <CustomButton text={"LOGIN"} onPress={submit} />
        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={navigateSignUp}
        >
          <Text style={{ ...styles.signUpText, color: theme.textColor }}>
            Sign up with email?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
