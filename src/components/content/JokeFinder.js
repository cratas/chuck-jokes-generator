import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getJokeByQuery } from "./../../utils/getJokeByQuery";
import UnstyledInputBasic from "./JokeFinderStyle";
import MyButton from "./MyButton";

export function JokeFinder() {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    getJokeByQuery(name)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleChangeType = (event) => {
    setName(event.target.value);
    console.log("");
  };

  return (
    <>
      <Box paddingRight={"1vw"}>
        <UnstyledInputBasic
          id="outlined-name"
          label="Joke"
          value={name}
          onChange={handleChangeType}
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <MyButton onClick={handleChange} text="Get joke" />
      </Box>
    </>
  );
}
