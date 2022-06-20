import axiosClient from "./axiosClient";

// function sending request to API with specific query, returning promise
export const getJokeByQuery = (query) => {
  return axiosClient.get("/search?query=" + query);
};
