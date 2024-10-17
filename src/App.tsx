import style from "./App.module.scss";
import { MainPage } from "./pages/MainPage";
import { MoviePage } from "./pages/MoviePage";

interface AppProps {}

export const App = () => {
  return (
    <div className={style.App}>
      <MainPage />
      <MoviePage />
    </div>
  );
};
