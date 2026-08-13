import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  { id: 1, name: "Atul Awari", email: "atul@example.com", role: "Admin" },
  { id: 2, name: "Demo User", email: "user@example.com", role: "User" }
];

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    addUser: (state, action) => { state.push({ ...action.payload, id: Date.now() }); },
    removeUser: (state, action) => state.filter(u => u.id !== action.payload)
  }
});

export const { addUser, removeUser } = usersSlice.actions;
export const store = configureStore({ reducer: { users: usersSlice.reducer } });