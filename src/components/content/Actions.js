import React from "react";
import MyButton from "./MyButton"

export const Actions = (props) => {
  return (
    <div>
      <MyButton onClick={props.setRandomJokeHandler} text="Get random joke" />
      <MyButton onClick={props.setRandomJokeByCategoryHandler} text="Get random joke by category" />


    </div>
  );
};
