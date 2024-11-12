import { Link } from "react-router-dom";
import style from "./MovieCard.module.scss";
import { IMovieCard } from "../../types";

interface MovieCardProps {
  data: IMovieCard;
}

export const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <div>
      <Link to={`/movie/${data.id}`} className={style.MovieCard}>
        <div className={style.imgBlock}>
          <img src={data.img} alt={data.title} />
        </div>
        <div className={style.movie_info}>
          <h3 className={style.title}>{data.title} </h3>
          <h3 className={style.genre}>{data.genre} </h3>
        </div>
      </Link>
    </div>
  );
};
