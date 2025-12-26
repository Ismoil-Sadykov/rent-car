import { createSlice } from "@reduxjs/toolkit";
import {
  GetCarById,
  GetReservationsByCarId,
  GetTodo,
  PostReservation,
} from "../api/api";

export interface CounterState {
  data: [];
  infoData: null;
  isLoading: boolean;
  error: string | null;
  reservations: [];
  busyDates: [];
}
const initialState: CounterState = {
  data: [],
  infoData: null,
  isLoading: false,
  error: null,
  reservations: [],
  busyDates: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTodo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(GetTodo.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(GetCarById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetCarById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.infoData = payload;
    });
    builder.addCase(GetCarById.rejected, (state) => {
      state.isLoading = false;
    });
    builder
      .addCase(PostReservation.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(PostReservation.fulfilled, (state) => {
        state.error = null;
      });
    builder.addCase(GetReservationsByCarId.fulfilled, (state, action) => {
      state.reservations = action.payload;
      const dates: Date[] = [];
      action.payload.forEach((res) => {
        const start = new Date(res.startDate);
        const end = new Date(res.endDate);
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          dates.push(new Date(d));
        }
      });

      state.busyDates = dates;
    });
  },
});

export const { clearError } = counterSlice.actions;
export default counterSlice.reducer;
