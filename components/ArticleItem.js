import { styles } from "../resources/styles/styles";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";

import { Text, TouchableOpacity, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export const ArticleItem = ({ article }) => {
  const { content, title, publishedAt, urlToImage, url } = article;

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        ...styles.cardItem,
        backgroundColor: theme.backgroundColor,
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Article", {
          itemTitle: title,
          itemContent: content,
          itemPublished: publishedAt,
          itemUrl: url,
          itemUrlToImg: urlToImage,
        });
        console.log("navigate to: ", item);
      }}
    >
      <Image source={{ uri: `${urlToImage}` }} style={styles.imageSize} />
      <Text style={{ ...styles.titleText, color: theme.textColor }}>
        {title}
      </Text>
      <Text style={{ ...styles.publishedAtText, color: theme.textColor }}>
        {publishedAt.length < 10
          ? `${publishedAt}`
          : `${publishedAt.substring(0, 10)}`}
      </Text>
      <Text numberOfLines={3} style={{ color: theme.textColor }}>
        {content.length < 150
          ? `${content}`
          : `${content.substring(0, 150)}...`}
      </Text>
      {/* <Button
            title={"read more.. ->"}
            onPress={() => Linking.openURL(`${item.url}`)}
          /> */}
    </TouchableOpacity>
  );
};
