import { React, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DisplayJoke } from "./DisplayJoke";
import { CategorySelect } from "./CategorySelect";
import { getRandomJoke } from "./../../utils/getRandomJoke";
import { getRandomJokeByCategory } from "./../../utils/getRandomJokeByCategory";
import { useSelector } from "react-redux";
import _ from "underscore";
import MyButton from "./MyButton";
import { JokeFinder } from "./JokeFinder";
import { BoxWrapper } from "./BoxWrapper";

export const MainContent = (props) => {
  const [joke, setJoke] = useState(); // state for keeping actual joke
  const { currentCategory } = useSelector(
    (state) => state.currentCategory,
    _.isEqual
  );

  const setRandomJoke = () => {
    getRandomJoke()
      .then((res) => {
        setJoke(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const setRandomJokeByCategory = () => {
    getRandomJokeByCategory(currentCategory)
      .then((res) => {
        setJoke(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  // displaying new joke on render component
  useEffect(() => {
    setRandomJoke();
  }, []);

  return (
    <Box
      height="80vh"
      width="100%"
      borderRadius={5}
      backgroundColor="var(--color-white)"
      border="3px solid black"
      display="flex"
      flexDirection="column"
    >
      <BoxWrapper title="Generate joke by category">
        <CategorySelect />
        <Box display="flex" justifyContent="center">
          <MyButton
            onClick={setRandomJokeByCategory}
            text="Get joke by category"
          />
        </Box>
      </BoxWrapper>

      <BoxWrapper isBordered={true} title="Find joke by text">
        <JokeFinder setJokeHandler={setJoke} />
      </BoxWrapper>

      <BoxWrapper isBordered={true} title="Get totally random joke">
        <Box display="flex" justifyContent="center">
          <MyButton onClick={setRandomJoke} text="Get random joke" />
        </Box>
      </BoxWrapper>

      <DisplayJoke newJoke={joke} />
    </Box>
  );
};
