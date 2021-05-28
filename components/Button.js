import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../resources/styles/styles";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export const CustomButton = ({ onPress, text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{
        ...styles.customButton,
        backgroundColor: theme.backgroundColor,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, color: theme.textColor }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
