import { Movie } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";
import classNames from "classnames";
import { useGetAllMoviesQuery } from "../../api";

interface MovieListProps {
  className?: string;
}

export const MovieList = ({ className }: MovieListProps) => {
  const { isLoading, data } = useGetAllMoviesQuery();

  const classes = classNames(style.MovieList, className);
  //const { data } = useSelector((state: RootState) => state.movies);

  function renderList(data: Movie[]) {
    return data.map((movieData) => (
      <MovieCard key={movieData.id} data={movieData} />
    ));
  }

  if (isLoading) return <h2>Is loading...</h2>;
  if (!data) return <h2>No movie found</h2>;

  return <div className={classes}>{renderList(data)}</div>;
};
