import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import style from "./MoviePage.module.scss";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../api";
import { SessionTime } from "../../components/SessionTime";
import { InfoTable } from "../../components/InfoTable";
import { helpers } from "./helpers";
import { Session } from "../../types";

export const MoviePage = () => {
  const params = useParams();
  const { isLoading, data } = useGetMovieByIdQuery(params.id!);

  const renderShowingsTimes = (sessions: Session[]) => {
    if (!data) return null;
    return sessions.map(({ id, time }) => {
      /* const classes = classNames(style.showingsTime, "hover"); */
      return <SessionTime key={id} id={id} movieId={data.id} time={time} />;
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
