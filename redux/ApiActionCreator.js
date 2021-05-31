import axios from "axios";
import { fetchData, fetchSuccess, fetchError } from "./ApiAction";

const apiActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchSuccess(response.data.articles));
        console.log("FETCH SUCCESS", response.data.articles);
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
