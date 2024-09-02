import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/User.ts";

interface UsersState {
  users: User[];
  filteredUsers: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsers: (
      state,
      action: PayloadAction<{ field: keyof User; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.filteredUsers = state.users.filter(
        (user) =>
          user[field] &&
          user[field].toString().toLowerCase().includes(value.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;
