import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },

    resetCount: () => {
      // state.count = 0;
      return initialState;
    },

    increamentAmounth: (state, action) => {
      state.count += action.payload;
    },

    decrementAmounth: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  increament,
  decrement,
  resetCount,
  increamentAmounth,
  decrementAmounth,
} = counterSlice.actions;
export default counterSlice.reducer;
