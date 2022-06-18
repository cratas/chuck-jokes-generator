import { useEffect } from "react";
import { CustomSelect, StyledOption } from "./CategorySelectStyles";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import { setCurrentCategory } from "../../store/currentCategorySlice";
import { setCategories } from "../../store/categoriesSlice";

export const CategorySelect = () => {
  const categories = useSelector(
    (state) => state.categories.categories,
    _.isEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, []);

  // console.log(currentCategory);

  const handleChange = (event) => {
    dispatch(setCurrentCategory(event));
  };

  return (
    <CustomSelect defaultValue={"animal"} onChange={handleChange} >
      {categories?.map((category) => (
        <StyledOption value={category} key={category}>{category}</StyledOption>
      ))}
    </CustomSelect>
  );
};
