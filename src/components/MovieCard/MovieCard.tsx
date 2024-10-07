import style from "./MovieCard.module.scss";

interface MovieCardProps {
  img?: string;
  title?: string;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className={style.MovieCard}>
      <div className={style.imgBlock}>
        <img
          src={
            props.img ||
            "https://images.justwatch.com/poster/320667174/s166/le-comte-de-monte-cristo.webp"
          }
          alt="Movie"
        />
      </div>
      <h3 className={style.title}>{props.title || "Movie's name"}</h3>
    </div>
  );
};
