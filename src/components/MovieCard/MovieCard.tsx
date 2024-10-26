import { Link } from "react-router-dom";
import style from "./MovieCard.module.scss";
import { useDispatch } from "react-redux";
import { setMovieTitle } from "../../slices";
import { IMovieCard } from "../../types";

interface MovieCardProps {
  data: IMovieCard;
}

export const MovieCard = (props: MovieCardProps) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      setMovieTitle({
        id: props.data.id,
        title: props.data.title + " --test",
      })
    );
  };
  return (
    <div>
      <button onClick={onClick}>Change</button>
      <Link to="/movie" className={style.MovieCard}>
        <div className={style.imgBlock}>
          <img src={props.data.img} alt={props.data.title} />
        </div>
        <div className={style.movie_info}>
          <h3 className={style.title}>{props.data.title} </h3>
          <h3 className={style.genre}>{props.data.genre} </h3>
        </div>
      </Link>
    </div>
  );
};
