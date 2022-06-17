import React, { useEffect } from "react";
import {  Box } from "@mui/system";
import CategoryMenu from "./CategoryMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../utils/getCategories";
import { setCategories } from "../../store/categoriesSlice";

export const MainContent = (props) => {
  const categories = useSelector((state) => state.categoriesReducer.category);
  const dispatch = useDispatch();


  useEffect(() => {
    getCategories()
      .then((res) => {
        console.log(res.data)
        dispatch(setCategories(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    console.log(categories);
  }

  return (
    <Box
      height="80vh"
      width="100%"
      borderRadius={10}
      backgroundColor="#FEEFDD"
      border="3px solid black"
    >
      <button onClick={handleClick}>Get categories</button>
      {/* {categories.map((c) => <li>c</li>)} */}
      {/* {props.randomJoke} */}
      {/* <CategoryMenu /> */}
    </Box>
  );
};
