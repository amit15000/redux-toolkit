import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bhalue: 100,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.bhalue += 1;
    },
    decrement: (state) => {
      state.bhalue -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
