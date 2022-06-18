import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: undefined,
};

export const currentCategorySlice = createSlice({
  name: "currentCategory",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      return {
        currentCategory: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
