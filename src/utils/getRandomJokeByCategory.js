import axiosClient from "./axiosClient";

// function sending request to API for random joke in given category, returning promise
export const getRandomJokeByCategory = (category) => {
  return axiosClient.get("/random?category=" + category);
};
