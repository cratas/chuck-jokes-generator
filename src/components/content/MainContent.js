import { React, useEffect } from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/categoriesSlice";

export const MainContent = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, []);

  // console.log(user);

  const handleClick = () => {
    console.log(categories[0]);
  };

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
