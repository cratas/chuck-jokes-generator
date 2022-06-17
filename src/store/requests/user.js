import axios from "axios";

export const requestGetUser = () => {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user",
  });
};


