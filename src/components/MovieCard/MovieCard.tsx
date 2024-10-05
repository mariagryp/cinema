import style from "./MovieCard.module.scss";

interface MovieCardProps {
  img?: string;
  title?: string;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className={style.MovieCard}>
      <div className={style.imgBlock}> </div>
      <img
        src="https://avatars.mds.yandex.net/get-afishanew/5109582/5fd84298-1942-4dfb-aaea-87b24232e3aa/s190x280"
        alt="The picture os the movie"
      />{" "}
      <h3>Movie's name</h3>
    </div>
  );
};
