import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Article({ route }) {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.summary}</Text>
    </View>
  );
}
