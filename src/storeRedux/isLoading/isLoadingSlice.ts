import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoading: false },
  reducers: {
    setLoadingAct: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingAct } = loadingSlice.actions;

export default loadingSlice.reducer;
