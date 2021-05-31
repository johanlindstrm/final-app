import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  TextInput,
  Text,
  Button,
} from "react-native";
import { ArticleItem } from "../components/ArticleItem";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import apiActionCreator from "../redux/ApiActionCreator";
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
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);

  // const data = useSelector((state) => state.data);
  // const loading = useSelector((state) => state.loading);
  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139
  //https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=dadd9e787e374cc0994c169cd16de139

  useEffect(() => {
    dispatch(
      apiActionCreator(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dadd9e787e374cc0994c169cd16de139"
      )
    );
    console.log("fetched", data);
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
      {loading ? (
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
// function mapStateToProps(state) {
//   return {
//     todos: state.articles,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     ...bindActionCreators({ fetchArticles }, dispatch),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Feed);

// const styles = StyleSheet.create({});
