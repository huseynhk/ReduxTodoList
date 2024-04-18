import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, actions) => {
    //   state.users.push(actions.payload);
    // },

    addUser: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    deleteUser: (state, actions) => {
      const existUser = state.users.find(
        (exist) => exist.id === actions.payload.id
      );
      if (existUser) {
        return {
          ...state,
          users: state.users.filter((user) => user !== existUser),
        };
      }
    },

    updateUser: (state, actions) => {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === actions.payload.id) {
            user = { ...actions.payload };
          }
          return user;
        }),
      };
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
