import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import { MainPage } from "./pages/MainPage";
import { MoviePage } from "./pages/MoviePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SessionPage } from "./pages/SessionPage";

export const App = () => {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="movie/:movieId/sessions/:sessionId" element={<SessionPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};
