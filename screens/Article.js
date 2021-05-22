import React from "react";
import { useContext } from "react";
import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function Article({ route, navigation }) {
  const { theme } = useContext(ThemeContext);
  const {
    itemId,
    itemTitle,
    itemContent,
    itemPublished,
    itemUrlToImg,
    itemUrl,
  } = route.params;

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: theme.backgroundViewColor,
      }}
    >
      <Image
        source={{ uri: `${itemUrlToImg}` }}
        style={{
          width: "98%",
          height: 250,
          marginTop: 15,
          alignSelf: "center",
        }}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: theme.textColor,
            textAlign: "center",
          }}
        >
          {itemTitle}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 5,
          color: theme.textColor,
          textAlign: "center",
        }}
      >
        {itemPublished.length < 10
          ? `${itemPublished}`
          : `${itemPublished.substring(0, 10)}`}
      </Text>
      <Text
        style={{
          // height: 100,
          width: "100%",
          marginTop: 5,
          padding: 10,
          color: theme.textColor,
          textAlign: "left",
        }}
      >
        {itemContent < 150
          ? `${itemContent}`
          : `${itemContent.substring(0, 150)}...`}
      </Text>
      <Button
        title={"read more"}
        onPress={() => Linking.openURL(`${itemUrl}`)}
      />
    </View>
  );
}
