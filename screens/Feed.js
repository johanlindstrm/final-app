import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  { id: 1, title: "Title", summary: "Summary Text" },
  { id: 2, title: "Title", summary: "Summary Text" },
  { id: 3, title: "Title", summary: "Summary Text" },
  { id: 4, title: "Title", summary: "Summary Text" },
  { id: 5, title: "Title", summary: "Summary Text" },
];

const Article = ({ title, summary, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "#FAFAFA",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Article", { title: title, summary: summary });
        console.log("navigate to: ", id);
      }}
    >
      <Text>{title}</Text>
      <Text>{summary}</Text>
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
  const renderArticle = ({ item }) => (
    <Article title={item.title} summary={item.summary} />
  );
  return (
    <SafeAreaView>
      <FlatList
        style={{ height: "100%", backgroundColor: "red" }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={DATA}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
