import axiosClient from "./axiosClient";

export const getJokeByQuery = (query) => {
  return axiosClient.get("/search?query=" + query);
};
