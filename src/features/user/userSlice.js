import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  details: {},
  isLoading: false,
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(
    "https://64542599c18adbbdfeb058b1.mockapi.io/posts"
  );
  return response.data;
});

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (id) => {
    const response = await axios.get(
      `https://64542599c18adbbdfeb058b1.mockapi.io/posts/${id}`
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.isLoading = true;
      state.status = "loading";
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
      state.status = "success";
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.status = "failed";
    });
  },
});

export default userSlice.reducer;
