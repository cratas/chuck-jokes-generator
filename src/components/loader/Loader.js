import React from "react";
import { Box } from "@mui/material";
import customClasses from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={customClasses.loaderContentWrapper}>
      <div className={customClasses.chuckHider}></div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <div className={customClasses.loaderWrapper}>
          <div className={customClasses.chuckLoader}></div>
          <div className={customClasses.loaderLine}></div>
        </div>
      </Box>
    </div>
  );
};
