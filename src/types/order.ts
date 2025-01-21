import { Seat } from "./seat";

export interface OrderData {
  id: number;
  bought_seats: Seat[];
}
