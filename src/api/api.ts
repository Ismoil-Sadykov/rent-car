import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axios";
import type { Car } from "../store/carStore";

export const api = import.meta.env.VITE_URL_CARS;

interface ReservationPayload {
  carId: number;
  startDate: string;
  endDate: string;
}

interface Reservation {
  carId: number;
  startDate: string;
  endDate: string;
}

export const GetTodo = createAsyncThunk("counter/GetTodo", async () => {
  try {
    const { data } = await axiosRequest.get(`${api}/api/cars`);
    return data;
  } catch (error: any) {
    console.error(error);
  }
});

export const GetCarById = createAsyncThunk<Car, number>("counter/GetCarById", async (id: number) => {
  try {
    const { data } = await axiosRequest.get(`${api}/api/cars/${id}`);
    return data;
  } catch (error: any) {
    console.error(error);
  }
});

export const PostReservation = createAsyncThunk<
  boolean,
  ReservationPayload,
  { rejectValue: string }
>(
  "reservation/post",
  async ({ carId, startDate, endDate }, { rejectWithValue, dispatch }) => {
    try {
      await axiosRequest.post("/api/reservations", {
        carId,
        startDate,
        endDate,
      });
      dispatch(GetReservationsByCarId(carId));
      return true;
    } catch (error: any) {
      if (error.response?.status === 409) {
        return rejectWithValue("These dates are already reserved");
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const GetReservationsByCarId = createAsyncThunk<
  Reservation[],
  number,
  { rejectValue: string }
>("reservation/getByCarId", async (carId: number, { rejectWithValue }) => {
  try {
    const { data } = await axiosRequest.get<Reservation[]>("/api/reservations");
    const carReservations = data.filter((res) => res.carId === carId);
    return carReservations;
  } catch (error: any) {
    return rejectWithValue("Failed to load reservations");
  }
});
