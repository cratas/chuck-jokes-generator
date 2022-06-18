import { React } from "react";
import { Box } from "@mui/system";

export const DisplayJoke = (props) => {
  return (
    <Box
      p={3}
      textAlign="center"
      border="3px solid black"
      backgroundColor="#fff"
      borderRadius={5}
      m="1vw"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <h2>„ {props.newJoke} “</h2>
    </Box>
  );
};
