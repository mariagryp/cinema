import { Country, Cast, Time } from "./index";
import { Session } from "./sessions";

export interface IMovieCard {
  id: number;
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  description: string;
  times: Time[];
  duration: number;
  country: Country;
  year: number;
  cast: Cast[];
  release: string;
  premier: string;
}

export interface MovieSessions extends Movie {
  sessions: Session[];
}
