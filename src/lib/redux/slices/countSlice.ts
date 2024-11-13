import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  count2: number;
  loading: boolean;
  loading2: boolean;
  error: string | null;
}

const initialState: CounterState = {
  count: 0,
  count2: 100,
  loading: false,
  loading2: false,
  error: null,
};

export const incrementCounter = createAsyncThunk(
  "counter/increment",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return amount;
  }
);

export const decrementCounter = createAsyncThunk(
  "counter/decrement",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return amount;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementCounter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(incrementCounter.fulfilled, (state, action) => {
        state.loading = false;
        state.count += action.payload;
      })
      .addCase(incrementCounter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      })
      .addCase(decrementCounter.pending, (state) => {
        state.loading2 = true;
        state.error = null;
      })
      .addCase(decrementCounter.fulfilled, (state, action) => {
        state.loading2 = false;
        state.count2 -= action.payload;
      })
      .addCase(decrementCounter.rejected, (state, action) => {
        state.loading2 = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default counterSlice.reducer;
