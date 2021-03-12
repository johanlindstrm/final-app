import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
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

const DATA = [
  { id: 1, title: "Title 1", summary: "Summary Text 1" },
  { id: 2, title: "Title 2", summary: "Summary Text 2" },
  { id: 3, title: "Title 3", summary: "Summary Text 3" },
  { id: 4, title: "Title 4", summary: "Summary Text 4" },
  { id: 5, title: "Title 5", summary: "Summary Text 5" },
];

const Article = ({ title, summary, item }) => {
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
      <Text style={{ color: theme.textColor }}>{title}</Text>
      <Text style={{ color: theme.textColor }}>{summary}</Text>
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
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const renderArticle = ({ item }) => (
    <Article title={item.title} summary={item.summary} item={item} />
  );
  const fetchData = () => {
    fetch("https://api.krisinformation.se/v1/feed", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.Entries);
        console.log("DATA FETCH: ", json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Button title='fetch data' onPress={fetchData} />
      </View>
      <FlatList
        style={{ height: "100%", backgroundColor: theme.backgroundColor }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={DATA}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
