import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { styles } from "../resources/styles/styles";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

// Custom FlatListItemSeperator for a clean line seperating items, not used with the new cards style
// const FlatListItemSeparator = () => {
//   return (
//     <View
//       style={{
//         height: 1,
//         width: "100%",
//         backgroundColor: "#d3d3d3",
//       }}
//     />
//   );
// };

export default function Feed() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // const [fetchData, setFetchData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139

  useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139"
    )
      .then(({ data }) => {
        console.log("defaultApp -> data", data.articles);
        setData(data.articles);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundViewColor,
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          // ItemSeparatorComponent={FlatListItemSeparator}
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item);
            return (
              <TouchableOpacity
                style={{
                  ...styles.cardItem,
                  backgroundColor: theme.backgroundColor,
                }}
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Article", {
                    itemTitle: item.title,
                    itemContent: item.content,
                    itemPublished: item.publishedAt,
                    itemUrl: item.url,
                    itemUrlToImg: item.urlToImage,
                  });
                  console.log("navigate to: ", item);
                }}
              >
                <Image
                  source={{ uri: `${item.urlToImage}` }}
                  style={styles.imageSize}
                />
                <Text style={{ ...styles.titleText, color: theme.textColor }}>
                  {item.title}
                </Text>
                <Text
                  style={{ ...styles.publishedAtText, color: theme.textColor }}
                >
                  {item.publishedAt.length < 10
                    ? `${item.publishedAt}`
                    : `${item.publishedAt.substring(0, 10)}`}
                </Text>
                <Text numberOfLines={3} style={{ color: theme.textColor }}>
                  {item.content.length < 150
                    ? `${item.content}`
                    : `${item.content.substring(0, 150)}...`}
                </Text>
                {/* <Button
                  title={"read more.. ->"}
                  onPress={() => Linking.openURL(`${item.url}`)}
                /> */}
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}
// const styles = StyleSheet.create({});
