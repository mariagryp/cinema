import { Country, Cast } from "./index";

export interface IMovieCard {
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  description: string;
  times: string[];
  duration: number;
  country: Country;
  year: number;
  cast: Cast[];
  release: string;
  premier: string;
}
