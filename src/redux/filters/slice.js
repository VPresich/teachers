import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    params: {
      level: "all",
      language: "all",
      price_per_hour: 100,
    },
  },
  reducers: {
    saveQueryParams: {
      reducer: (state, action) => {
        state.params = action.payload;
      },
    },
  },
});

export const { saveQueryParams } = filtersSlice.actions;
export default filtersSlice.reducer;
