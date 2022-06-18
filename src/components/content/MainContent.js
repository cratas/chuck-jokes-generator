import { React, useEffect } from "react";
import { Box } from "@mui/system";
import { setCategories } from "../../store/categoriesSlice";
import { CategoriesMenu } from "./CategoriesMenu";
import _ from "underscore";
import { DisplayJoke } from "./DisplayJoke";
import { CategorySelect } from "./CategorySelect";

export const MainContent = (props) => {

  return (
    <Box
      height="80vh"
      width="100%"
      borderRadius={10}
      backgroundColor="var(--color-white)"
      border="3px solid black"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box >
        <CategorySelect />
        <CategorySelect />
      </Box>

      <CategoriesMenu />
      <DisplayJoke />
    </Box>
  );
};
