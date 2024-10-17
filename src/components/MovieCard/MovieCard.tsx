import style from "./MovieCard.module.scss";

interface MovieCardProps {
  data: {
    img?: string;
    title?: string;
    genre?: string;
  };
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className={style.MovieCard}>
      <div className={style.imgBlock}>
        <img src={props.data.img} alt={props.data.title} />
      </div>
      <div className={style.movie_info}>
        <h3 className={style.title}>{props.data.title} </h3>
        <h3 className={style.genre}>{props.data.genre} </h3>
      </div>
    </div>
  );
};
