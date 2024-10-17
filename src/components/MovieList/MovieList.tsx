import { IMovieCard } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";
import classNames from "classnames";

const movies: IMovieCard[] = [
  {
    img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
    title: "Movie Name",
    genre: "Movie Genre ",
  },
  {
    img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
    title: "Movie Name 2",
    genre: "Movie Genre 2",
  },
  {
    img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
    title: "Movie Name 3",
    genre: "Movie Genre 3",
  },
  {
    img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
    title: "Movie Name 3",
    genre: "Movie Genre 3",
  },
];

interface MovieListProps {
  className?: string;
}

export const MovieList = ({ className }: MovieListProps) => {
  const classes = classNames(style.MovieList, className);
  function renderList(data: IMovieCard[]) {
    return data.map((movieData) => <MovieCard data={movieData} />);
  }

  return <div className={classes}>{renderList(movies)}</div>;
};
