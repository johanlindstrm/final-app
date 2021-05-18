import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";

import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const DATA = [
  { id: 1, title: "Title 1", summary: "Summary Text 1" },
  { id: 2, title: "Title 2", summary: "Summary Text 2" },
  { id: 3, title: "Title 3", summary: "Summary Text 3" },
  { id: 4, title: "Title 4", summary: "Summary Text 4" },
  { id: 5, title: "Title 5", summary: "Summary Text 5" },
];

const Article = ({ data: { item } }) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: "100%",
        backgroundColor: theme.articleBackground,
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Article", {});
        console.log("navigate to: ", item);
      }}
    >
      <Text style={{ color: theme.textColor }}>Testing Title{item.title}</Text>
      <Text style={{ color: theme.textColor }}>
        Testing Content{item.content}
      </Text>
    </TouchableOpacity>
  );
};

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

export default function Feed() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const [fetchData, setFetchData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139",
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setFetchData(json.body);
  //       console.log("DATA", json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [fetchData]);
  useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139"
    )
      .then(({ data }) => {
        console.log("defaultApp -> data", data.articles);
        setData(data.articles);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
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
                  height: 100,
                  width: "100%",
                  backgroundColor: theme.articleBackground,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Article", {});
                  console.log("navigate to: ", item);
                }}
              >
                <Text style={{ color: theme.textColor }}>{item.title}</Text>
                <Text style={{ color: theme.textColor }}>
                  {item.publishedAt}
                </Text>
                <Text style={{ color: theme.textColor }}>{item.url}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
  // return (
  //   <SafeAreaView>
  //     <View>
  //       <Button
  //         title='fetch data'
  //         onPress={() => {
  //           console.log("DATA IN useState", data);
  //         }}
  //       />
  //     </View>

  //     <FlatList
  //       style={{ height: "100%", backgroundColor: theme.backgroundColor }}
  //       ItemSeparatorComponent={FlatListItemSeparator}
  //       data={data}
  //       renderItem={({ item }) => <Article data={{ theme, item }} />}
  //       // data={[1, 2, 3]}
  //       // renderItem={({ item }) => <Text>{item}</Text>}
  //       keyExtractor={(item) => item.toString()}
  //     />
  //   </SafeAreaView>
  // );
}
