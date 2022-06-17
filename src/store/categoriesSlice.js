import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["kamil"],
  category: "milan"
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return {
        categories: [...action.payload],
        category: action.payload[0]
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
