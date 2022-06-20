import axiosClient from "./axiosClient";

// function sending request to API for random joke, returning promise
export const getRandomJoke = () => {
  return axiosClient.get("/random");
};

