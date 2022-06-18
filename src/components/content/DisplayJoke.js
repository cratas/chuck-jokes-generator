import { useEffect, React, useState } from "react";
import { getRandomJoke } from "./../../utils/getRandomJoke";
import { Box } from "@mui/system";

export const DisplayJoke = () => {
  const [randomJoke, setRandomJoke] = useState();

  useEffect(() => {
    getRandomJoke()
      .then((res) => {
        setRandomJoke(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box p={3} textAlign="center">
      <h2>„ {randomJoke} “</h2>
    </Box>
  );
};
