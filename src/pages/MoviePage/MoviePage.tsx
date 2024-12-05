import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
//import { Movie } from "../../types";
//import { IMovieCard } from "../../types";
import style from "./MoviePage.module.scss";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../api";
import { SessionTime } from "../../components/SessionTime";
import { InfoTable } from "../../components/InfoTable";

import { helpers } from "./helpers";
import { Session } from "../../types";

//import { Movie } from "../../types";

/* const data: Movie = {
  id: 1,
  img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
  title: "Movie Name",
  genre: "Movie Genre ",
  description:
    "The Wild Robot” follows Rozzum 7134 (“Roz” for short), a futuristic robot that washes ashore on a deserted island. A tale of survival and discovery begins.",
  times: ["9:00", "12:00", "16:00", "18:00", "20:00"],
  cast: ["First Name", "Another Name", "Third Name", "Next Name", "Next Name"],
  country: "USA",
  duration: 93,
  year: 2024,
  release: "18 september, 2024",
  premier: "05 juli 2024",
}; */

export const MoviePage = () => {
  const params = useParams();
  const { isLoading, data } = useGetMovieByIdQuery(params.id!);
  console.log("data", data);

  const renderShowingsTimes = (sessions: Session[]) => {
    return sessions.map(({ id, time }) => {
      /* const classes = classNames(style.showingsTime, "hover"); */
      return <SessionTime key={id} id={id} time={time} />;
    });
  };

  if (isLoading) return <h2>Loading</h2>;
  if (!data) return <Title>No movie has been found</Title>;

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
            <InfoTable data={helpers.getInfoData(data)} />
          </div>
          <div className={style.showings}>
            <h3 className={style.subtitle}>Showings: </h3>
            <div className={style.ShowingsList}>
              {renderShowingsTimes(data.sessions)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
