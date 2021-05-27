// Hello estupido lägg samla alla styles som användes i appen
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  customButton: {
    width: 360,
    height: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardItem: {
    height: 380,
    padding: 5,
    width: "98%",
    marginBottom: 10,
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  gridItem: {
    height: 230,
    marginTop: 5,
    width: 200,
    padding: 5,
    borderRadius: 5,
  },

  gridContainer: {
    flex: 0.5,
    flexDirection: "column",
    padding: 5,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },

  publishedAtText: {
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  imageSize: {
    width: "100%",
    height: 225,
  },

  heartIconSize: {
    width: 25,
    height: 25,
  },

  gridImgSize: {
    width: "100%",
    height: 120,
  },

  inputStyle: {
    padding: 15,
    backgroundColor: "#DCDCDC",
    marginBottom: 15,
    width: 360,
    borderRadius: 5,
  },
  headerContainer: {
    flex: 0.9,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  header: {
    color: "#000",
    fontSize: 42,
    fontWeight: "700",
    paddingTop: 150,
  },
  signUpText: {
    marginTop: 10,
    fontSize: 16,
  },
  articleImg: {
    width: "98%",
    height: 250,
    marginTop: 15,
    alignSelf: "center",
  },
  articleTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  articleContent: {
    width: "100%",
    marginTop: 5,
    padding: 10,
    textAlign: "left",
  },
});
