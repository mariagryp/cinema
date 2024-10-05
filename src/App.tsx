import { MainPage } from "./pages/MainPage";
import style from "./App.module.scss";

interface AppProps {}

export const App = () => {
  return (
    <div className={style.App}>
      <MainPage />
    </div>
  );
};
