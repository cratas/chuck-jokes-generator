import { useState } from "react";
import Box from "@mui/material/Box";
import { getJokeByQuery } from "./../../utils/getJokeByQuery";
import UnstyledInputBasic from "./JokeFinderStyle";
import MyButton from "./MyButton";
import { getRandomJokeFromResponse } from "../../utils/getRandomJokeFromResponse";

export const JokeFinder = (props) => {
  const [inputText, setInputText] = useState("");
  const [countOfFoundJokes, setCountOfFoundJokes] = useState(0);
  const [responseWithJokes, setResponseWithJokes] = useState();
  const [isShownInfoText, setIsShownInfoText] = useState(false);

  const handleClick = () => {
    // generate random joke from response
    const generatedJoke = getRandomJokeFromResponse(responseWithJokes);
    props.setJokeHandler(generatedJoke);
  };

  const onChangeHandle = (event) => {
    setInputText(event.target.value);

    setIsShownInfoText(event.target.value.length < 1 ? false : true);

    // API needs at least 3 characters
    if (event.target.value.length < 3) {
      setResponseWithJokes(null);
      setCountOfFoundJokes(0);

      return;
    }

    // request is called after delay because of until the user stops typing
    setTimeout(() => {
      getJokeByQuery(event.target.value)
        .then((res) => {
          setResponseWithJokes(res);
          setCountOfFoundJokes(res.data.total);
        })
        .catch((err) => {
          setCountOfFoundJokes(0);
          console.log(err);
        });
    }, 200);
  };

  return (
    <>
      <Box paddingRight={"1vw"}>
        <UnstyledInputBasic
          label="Joke"
          value={inputText}
          onChange={onChangeHandle}
        />
      </Box>
      {isShownInfoText && (
        <div style={{ color: "var(--color-grey)" }}>
          <span style={{ fontSize: "1.3rem", color: "black" }}>
            {countOfFoundJokes}
          </span>{" "}
          jokes was found.
        </div>
      )}
      <Box display="flex" justifyContent="center">
        <MyButton
          onClick={handleClick}
          text="Get joke"
          disabled={countOfFoundJokes === 0}
          marginTop={isShownInfoText ? "3px" : "1vw"}
        />
      </Box>
    </>
  );
};
