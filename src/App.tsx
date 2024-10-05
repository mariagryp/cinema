import MainPage from "./pages/MainPage/MainPage";
import style from'./App.module.scss';

interface AppProps {}

export const App = () => {
  return (
    <div className={style.app}>
      <MainPage />
    </div>
  );
};
