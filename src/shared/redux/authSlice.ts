import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInRequest, SignUpRequest } from "../dtos/auth";
import { postSignIn, postSignUp } from "../api/auth.ts";
import { ApiError } from "../api/apiError.ts";

export const signIn = createAsyncThunk<
  string,
  SignInRequest,
  { rejectValue: ApiError }
>("auth/signIn", async (credentials, { rejectWithValue }) => {
  try {
    const { token } = await postSignIn(credentials);
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    return rejectWithValue(error as ApiError);
  }
});

export const signUp = createAsyncThunk<
  string,
  SignUpRequest,
  { rejectValue: ApiError }
>("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {
    const { token } = await postSignUp(credentials);
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    return rejectWithValue(ApiError.fromResponse(error));
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    isLoading: false,
    error: null as ApiError | null,
  },
  reducers: {
    signOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(
        signIn.rejected,
        (state, action: PayloadAction<ApiError | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || ApiError.unknown();
        },
      )
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(
        signUp.rejected,
        (state, action: PayloadAction<ApiError | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || ApiError.unknown();
        },
      );
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
