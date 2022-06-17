import axiosClient from "./axiosClient";

export const getRandomJoke = () => {
  return axiosClient.get("/random");
};

