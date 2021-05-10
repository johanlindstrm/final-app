import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const apiKey = "dadd9e787e374cc0994c169cd16de139";

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
        navigation.navigate("Article", { title: title, summary: summary });
        console.log("navigate to: ", item);
      }}
    >
      <Text style={{ color: theme.textColor }}>Testing Title{item.title}</Text>
      <Text style={{ color: theme.textColor }}>
        Testing Content{item.summary}
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
  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);

  // const renderArticle = ({ item }) => (
  //   <Article title={item.title} summary={item.summary} item={item} />
  // );

  // useEffect(async () => {
  //   await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139",
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       console.log("DATA FETCH: ", json);
  //       console.log("Test Data array", data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139"
      );

      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {/* <View>
        <Button title='fetch data' onPress={fetchData} />
      </View> */}

      <FlatList
        style={{ height: "100%", backgroundColor: theme.backgroundColor }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={data}
        renderItem={({ item }) => {
          <Article />;
        }}
        // renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
