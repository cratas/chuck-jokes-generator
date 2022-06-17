import { React, useEffect } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categoriesSlice";
import { CategoriesMenu } from "./CategoriesMenu";
import _ from "underscore";
import { DisplayJoke } from "./DisplayJoke";

export const MainContent = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, []);

  return (
    <Box
      height="80vh"
      width="100%"
      borderRadius={10}
      backgroundColor="#FEEFDD"
      border="3px solid black"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <CategoriesMenu />
      <DisplayJoke />

    </Box>
  );
};
