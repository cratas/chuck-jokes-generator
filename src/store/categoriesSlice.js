import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: "kamil",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return {
        categories: action.payload,
        category: state.currentCategory,
      };
    },
    setCurrentCategory: (state, action) => {
      return {
        category: action.payload.category,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
