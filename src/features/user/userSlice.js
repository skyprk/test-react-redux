import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
    },
  },
  reducers: {
    resetUser: (state) => {
      state.value = {
        name: "",
        email: "",
      };
    },
    createUser: (state, action) => {
      state.value.name = action.payload.name;
      state.value.email = action.payload.email;
    },
  },
});

export const { resetUser, createUser } = userSlice.actions;

export default userSlice.reducer;
