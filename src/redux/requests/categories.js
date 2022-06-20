import axios from "axios";

export const requestGetCategories = () => {
  return axios.request({
    method: "get",
    url: "https://api.chucknorris.io/jokes/categories",
  });
};
