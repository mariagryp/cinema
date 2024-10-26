import { useGetPokemonByNameQuery } from "../../api/rtkApi";
import { MovieList } from "../../components/MovieList";
import { Title } from "../../components/Title";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  if (isLoading) return <h2>Is loading...</h2>;

  return (
    <div className={style.MainPage}>
      <Title center> Choose a movie </Title>
      <MovieList className={style.movieList} />
    </div>
  );
};
