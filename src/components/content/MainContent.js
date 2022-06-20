import { React, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DisplayJoke } from "./DisplayJoke";
import { CategorySelect } from "../UI/CategorySelect";
import { getRandomJoke } from "./../../utils/getRandomJoke";
import { getRandomJokeByCategory } from "./../../utils/getRandomJokeByCategory";
import { useSelector } from "react-redux";
import MyButton from "../UI/MyButton";
import { JokeFinder } from "../UI/JokeFinder";
import { BoxWrapper } from "../UI/BoxWrapper";
import _ from "underscore";

export const MainContent = (props) => {
  const [joke, setJoke] = useState(); // state for keeping actual joke
  const { currentCategory } = useSelector(
    (state) => state.currentCategory,
    _.isEqual
  );

  // function gets totally random joke from API
  const setRandomJoke = () => {
    getRandomJoke()
      .then((res) => {
        setJoke(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  // function gets random joke from api by given category
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
      <BoxWrapper title="Generate random joke in given category" cutMargin={true}>
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
