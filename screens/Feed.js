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
  TextInput,
} from "react-native";
import { ArticleItem } from "../components/ArticleItem";
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
      <View style={{ backgroundColor: "red", height: 40 }}>
        <TextInput
          placeholder={"search"}
          placeholderTextColor={theme.textColor}
          maxLength={40}
        ></TextInput>
      </View>
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
          renderItem={({ item }) => (
            <ArticleItem
              article={item}
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
            />
          )}
        />
      )}
    </View>
  );
}
// const styles = StyleSheet.create({});
