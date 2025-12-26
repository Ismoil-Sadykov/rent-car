import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axios";

export const api = import.meta.env.VITE_URL_CARS;

export const GetTodo = createAsyncThunk("counter/GetTodo", async () => {
  try {
    const { data } = await axiosRequest.get(`${api}/api/cars`);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const GetCarById = createAsyncThunk("counter/GetCarById", async (id) => {
  try {
    const { data } = await axiosRequest.get(`${api}/api/cars/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const PostReservation = createAsyncThunk(
  "reservation/post",
  async ({ carId, startDate, endDate }, { rejectWithValue, dispatch }) => {
    try {
      await axiosRequest.post("/api/reservations", {
        carId,
        startDate,
        endDate,
      });
      dispatch(GetReservationsByCarId(carId))
      return true;
    } catch (error) {
      if (error.response?.status === 409) {
        return rejectWithValue("These dates are already reserved");
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const GetReservationsByCarId = createAsyncThunk(
  "reservation/getByCarId",
  async (carId: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosRequest.get("/api/reservations");
      const carReservations = data.filter((res) => res.carId === carId);
      return carReservations;
    } catch (error) {
      return rejectWithValue("Failed to load reservations");
    }
  }
);
