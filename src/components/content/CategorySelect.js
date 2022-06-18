import { useEffect } from "react";
import { CustomSelect, StyledOption } from "./CategorySelectStyles";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import { setCurrentCategory } from "../../store/currentCategorySlice";

export const CategorySelect = () => {
  const categories = useSelector(
    (state) => state.categories.categories,
    _.isEqual
  );
  const currentCategory = useSelector(
    (state) => state.currentCategory.currentCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentCategory(categories[0]));
  }, []);

  const handleChange = (event) => {
    dispatch(setCurrentCategory(event));
  };

  console.log(categories);
  console.log(currentCategory);

  return (
    <CustomSelect defaultValue={currentCategory} onChange={handleChange}>
      {categories?.map((category) => (
        <StyledOption value={category}>{category}</StyledOption>
      ))}
    </CustomSelect>
  );
};
