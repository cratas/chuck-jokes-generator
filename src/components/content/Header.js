import React from "react";
import { Box } from "@mui/system";
import chuckHeaderImage from "../../assets/chuck-header.png";
import customClasses from "./Content.module.css";

const Header = ({title}) => {
  return (
    <Box
      height="10vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
    >
      <h1>{title}</h1>
      <div className={customClasses.imageWrapper}>
        <img src={chuckHeaderImage} alt="chuck-header" />
      </div>
    </Box>
  );
};

export default Header;
