import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  // const [switchValue, setSwitchValue] = useState(true);

  // const toggleSwitch = (isDarkMode) => {
  //   //To handle switch toggle
  //   setSwitchValue(isDarkMode);
  //   //State changes according to switch
  // };
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: theme.backgroundColor,
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      {/* <Switch
        style={{ marginTop: 30 }}
        onValueChange={toggleSwitch}
        value={switchValue}
      /> */}

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleTheme(Schemes.DEF);
        }}
      >
        <Text style={{ fontSize: 22 }}>Default Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleTheme(Schemes.DRK);
        }}
      >
        <Text style={{ fontSize: 22 }}>Dark Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  settingBtn: {
    width: 300,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  },
});
