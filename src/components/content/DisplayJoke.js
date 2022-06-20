import { React } from "react";
import { Box } from "@mui/system";

export const DisplayJoke = (props) => {
  let customFontSize = "2.3rem";

  const text = props.newJoke !== undefined ? props.newJoke : "";

  // fitting text inside div
  if (text.length > 100) customFontSize = "2.1rem";
  if (text.length > 150) customFontSize = "1.9rem";
  if (text.length > 200) customFontSize = "1.7rem";
  if (text.length > 250) customFontSize = "1.2rem";

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
      <h2 style={{ fontSize: customFontSize }}>{props.newJoke}</h2>
    </Box>
  );
};
