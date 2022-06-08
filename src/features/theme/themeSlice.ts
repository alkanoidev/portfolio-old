import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "dark",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state: any) => {
      state.valueOf = !state.valueOf;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
