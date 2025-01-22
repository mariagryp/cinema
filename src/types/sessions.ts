import { BoughtSeats } from "./seat";

export interface Session {
  id: number;
  movieId: number;
  seatId: number;
  time: string;
  seat?: BoughtSeats;
}
