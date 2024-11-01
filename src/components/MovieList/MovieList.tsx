import { useSelector } from "react-redux";
import { IMovieCard } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";
import classNames from "classnames";
import { RootState } from "../../store";


interface MovieListProps {
  className?: string;
}

export const MovieList = ({ className }: MovieListProps) => {
  const classes = classNames(style.MovieList, className);
  const { data } = useSelector((state: RootState) => state.movies);
  function renderList(data: IMovieCard[]) {
    return data.map((movieData, index) => (
      <MovieCard key={index} data={movieData} />
    ));
  }

  return <div className={classes}>{renderList(data)}</div>;
};
