import { useEffect } from "react";
import { CustomSelect, StyledOption } from "../customStyles/CategorySelectStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../redux/store/reducers/currentCategorySlice";
import { setCategories } from "../../redux/store/reducers/categoriesSlice";
import _ from "underscore";

export const CategorySelect = () => {
  const { categories } = useSelector((state) => state.categories, _.isEqual);
  const dispatch = useDispatch();

  // getting categories from API 
  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  // setting choosed category to redux store
  const handleChange = (event) => {
    dispatch(setCurrentCategory(event));
  };

  return (
    <CustomSelect defaultValue="animal" onChange={handleChange}>
      {categories?.map((category) => (
        <StyledOption value={category} key={category}>
          {category}
        </StyledOption>
      ))}
    </CustomSelect>
  );
};
