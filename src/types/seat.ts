export interface Seat {
  row: number;
  seat: number;
}

export interface BoughtSeats {
  id: number;
  bought_seats: Seat[];
}
