import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "users",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    setUsers: (s, a) => {
      s.items = a.payload;
    },
    setLoading: (s, a) => {
      s.loading = a.payload;
    },
    setError: (s, a) => {
      s.error = a.payload;
    },
  },
});
export const { setUsers, setLoading, setError } = slice.actions;
export default slice.reducer;
