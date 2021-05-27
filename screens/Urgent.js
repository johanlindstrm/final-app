import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { styles } from "../resources/styles/styles";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Linking,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#d3d3d3",
      }}
    />
  );
};

export default function Urgent() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // const [fetchData, setFetchData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  //https://newsapi.org/v2/top-headlines?country=sv&category=${category}&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/sources?category=businessapiKey=dadd9e787e374cc0994c169cd16de139
  // https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=dadd9e787e374cc0994c169cd16de139
  const category = "health";
  useEffect(() => {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=dadd9e787e374cc0994c169cd16de139`
    )
      .then(({ data }) => {
        console.log("URGENT DATA", data.articles);
        setData(data.articles);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 0,
        margin: 0,
        backgroundColor: theme.backgroundViewColor,
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          //   ItemSeparatorComponent={FlatListItemSeparator}
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item);
            return (
              <View style={{ flex: 0.5, flexDirection: "column", padding: 5 }}>
                <TouchableOpacity
                  style={{
                    ...styles.gridItem,
                    backgroundColor: theme.articleBackground,
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate("Article", {
                      itemId: item.id,
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
                    style={styles.gridImgSize}
                  />
                  <Text
                    style={{
                      ...styles.titleText,
                      color: theme.textColor,
                      fontSize: 14,
                    }}
                  >
                    {item.title.length < 35
                      ? `${item.title}`
                      : `${item.title.substring(0, 35)}...`}
                  </Text>
                  <Text
                    style={{
                      ...styles.publishedAtText,
                      color: theme.textColor,
                    }}
                  >
                    {item.publishedAt.length < 10
                      ? `${item.publishedAt}`
                      : `${item.publishedAt.substring(0, 10)}`}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingRight: 5,
                      }}
                    >
                      <Image
                        source={{
                          uri:
                            "https://img.icons8.com/ios/24/000000/like--v1.png",
                        }}
                        style={styles.heartIconSize}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingLeft: 5 }}>
                      <Text
                        style={{ color: theme.textColor }}
                        onPress={() => Linking.openURL(`${item.url}`)}
                      >
                        READ MORE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
