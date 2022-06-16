import axiosClient from "./axiosClient";

export const getRandomJokes = () => {
  return axiosClient.get("/random");
};

