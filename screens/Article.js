import React from "react";
import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";

export default function Article({ route, navigation }) {
  const {
    itemId,
    itemTitle,
    itemContent,
    itemPublished,
    itemUrlToImg,
    itemUrl,
  } = route.params;

  return (
    <View>
      <Image
        source={{ uri: `${itemUrlToImg}` }}
        style={{
          width: "100%",
          height: 250,
          marginTop: 15,
          marginLeft: 5,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          padding: 5,
          backgroundColor: "green",
        }}
      >
        {itemTitle}
      </Text>
      <Text style={{ marginTop: 10, padding: 5, backgroundColor: "red" }}>
        {itemPublished}
      </Text>
      <Text
        style={{
          height: 100,
          width: "100%",
          marginTop: 10,
          padding: 5,
          backgroundColor: "orange",
        }}
      >
        {itemContent}
      </Text>
      <Button
        title={"read more"}
        onPress={() => Linking.openURL(`${itemUrl}`)}
      />
    </View>
  );
}
