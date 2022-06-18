import { React, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DisplayJoke } from "./DisplayJoke";
import { CategorySelect } from "./CategorySelect";
import { Actions } from "./Actions";
import { getRandomJoke } from "./../../utils/getRandomJoke";
import { getRandomJokeByCategory } from "./../../utils/getRandomJokeByCategory";
import { useSelector } from "react-redux";
import _ from "underscore";

export const MainContent = (props) => {
  const [joke, setJoke] = useState(); // state for keeping actual joke
  const currentCategory = useSelector(
    (state) => state.currentCategory.currentCategory,
    _.isEqual
  );

  const setRandomJoke = () => {
    getRandomJoke()
      .then((res) => {
        setJoke(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const setRandomJokeByCategory = (category) => {
    getRandomJokeByCategory(category)
      .then((res) => {
        setJoke(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  // displaying new joke on render component
  useEffect(() => {
    setRandomJoke();
  }, []);

  const handleClick = () => {
    setRandomJoke();
  };

  const handleClickTwo = () => {
    console.log(currentCategory);
    setRandomJokeByCategory(currentCategory);
  };

  return (
    <Box
      height="80vh"
      width="100%"
      borderRadius={10}
      backgroundColor="var(--color-white)"
      border="3px solid black"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <CategorySelect />
      </Box>
      <button onClick={handleClick}>click</button>
      <button onClick={handleClickTwo}>category joke</button>

      {/* <CategoriesMenu /> */}
      <Actions />
      <DisplayJoke newJoke={joke} />
    </Box>
  );
};
