import { React } from "react";
import { Box } from "@mui/system";

export const DisplayJoke = (props) => {
  return (
    <Box p={3} textAlign="center">
      <h2>„ {props.newJoke} “</h2>
    </Box>
  );
};
