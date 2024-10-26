import classNames from "classnames";
import { Header } from "../../components/Header";
import { Movie } from "../../types";
//import { IMovieCard } from "../../types";

import style from "./MoviePage.module.scss";

const data: Movie = {
  id: 1,
  img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
  title: "Movie Name",
  genre: "Movie Genre ",
  description:
    "The Wild Robot” follows Rozzum 7134 (“Roz” for short), a futuristic robot that washes ashore on a deserted island. A tale of survival and discovery begins.",
  times: ["10:00", "12:30", "15:20", "19:45", "21:30"],
  cast: ["First Name", "Another Name", "Third Name", "Next Name", "Next Name"],
  country: "USA",
  duration: 93,
  year: 2024,
  release: "18 september, 2024",
  premier: "05 juli 2024",
};

export const MoviePage = () => {
  const renderShowingsTimes = (times: string[]) => {
    return times.map((time) => {
      const classes = classNames(style.showingsTime, "hover");
      return (
        <div key={time} className={classes}>
          {time}
        </div>
      );
    });
  };

  return (
    <div className={style.MoviePage}>
      <Header title="Movie Name" />
      <div className={style.content}>
        <div>
          <div className={style.imgBlock}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.desc}>{data.description}</div>
        </div>
        <div className={style.right}>
          <div className={style.info}>
            <div className={style.infoLabel}>Release Date: </div>
            <div className={style.infoValue}>{data.release}</div>

            <div className={style.infoLabel}>Cast: </div>
            <div className={style.infoValue}>{data.cast.join(", ")}</div>

            <div className={style.infoLabel}>Run Time: </div>
            <div className={style.infoValue}>{data.duration}</div>

            <div className={style.infoLabel}>Country: </div>
            <div className={style.infoValue}>{data.country}</div>

            <div className={style.infoLabel}>Premier: </div>
            <div className={style.infoValue}>{data.premier}</div>
          </div>
          <div className={style.showings}>
            <h3 className={style.subtitle}>Showings: </h3>
            <div className={style.ShowingsList}>
              {renderShowingsTimes(data.times)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
