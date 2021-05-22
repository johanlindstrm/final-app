import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const [selected, isSelected] = useState(0);
  const { toggleTheme, theme } = useContext(ThemeContext);

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
        style={selected === 1 ? styles.settingsBtnSelected : styles.settingBtn}
        onPress={() => {
          {
            toggleTheme(Schemes.DEF), isSelected({ selected: 1 });
          }
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 20 }}>Light Mode</Text>
        <Image
          source={require("../resources/icons/icon-sun.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={selected === 2 ? styles.settingsBtnSelected : styles.settingBtn}
        onPress={() => {
          {
            toggleTheme(Schemes.DRK), isSelected({ selected: 2 });
          }
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 22 }}>Dark Mode</Text>
        <Image
          source={require("../resources/icons/icon-half-moon.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsBtnSelected: {
    width: 300,
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  },
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
