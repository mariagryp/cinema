import { IMovieCard } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";

const movies: IMovieCard[] = [
  {
    img: "https://images.justwatch.com/poster/320667174/s166/le-comte-de-monte-cristo.webp",
    title: "Movies name",
    genre: "Genre",
  },
  {
    img: "https://images.justwatch.com/poster/320667174/s166/le-comte-de-monte-cristo.webp",
    title: "Movies name",
    genre: "Genre",
  },
  {
    img: "https://images.justwatch.com/poster/320667174/s166/le-comte-de-monte-cristo.webp",
    title: "Movies name",
    genre: "Genre",
  },
];

//function to render the data
export const MovieList = () => {
  function renderList(data: IMovieCard[]) {
    return data.map((movieData) => <MovieCard data={movieData} />);
  }

  return <div className={style.MovieList}> {renderList(movies)} </div>;
};
