import { React } from "react";
import { Box } from "@mui/system";

export const BoxWrapper = (props) => {
  return (
    <Box
      m="1vw"
      borderTop={props.isBordered && "1px solid black"}
      display="flex"
      flexDirection="column"
    >
      <div style={{ marginTop: "0.5rem" }}>{props.title}</div>
      {props.children}
    </Box>
  );
};
