import axiosClient from "./axiosClient";

export const getRandomJokeByCategory = (category) => {
  return axiosClient.get("/random?category=" + category);
};
