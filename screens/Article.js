import React from "react";
import { useContext } from "react";
import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../resources/styles/styles";

export default function Article({ route }) {
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
      <Image source={{ uri: `${itemUrlToImg}` }} style={styles.articleImg} />
      <View>
        <Text style={{ ...styles.articleTitle, color: theme.textColor }}>
          {itemTitle}
        </Text>
      </View>

      <Text
        style={{
          color: theme.textColor,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {itemPublished.length < 10
          ? `${itemPublished}`
          : `${itemPublished.substring(0, 10)}`}
      </Text>
      <Text
        style={{
          ...styles.articleContent,
          color: theme.textColor,
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
