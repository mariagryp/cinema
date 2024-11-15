import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  seats: number[];
}

const initialState: OrderState = {
  seats: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<number>) => {
      state.seats.push(action.payload);
    },
    deleteSeat: (state, action: PayloadAction<number>) => {
      const seatId = action.payload;
      const filteredSeats = state.seats.filter((seat) => seat !== seatId);
      state.seats = filteredSeats;
    },
    clearOrder: (state) => {
      state.seats = [];
    },
  },
});

export const { reducer: orderReducer } = orderSlice;
export const { addSeat, deleteSeat, clearOrder } = orderSlice.actions;
