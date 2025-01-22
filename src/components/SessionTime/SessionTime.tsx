import { Link } from "react-router-dom";
import style from "./SessionTime.module.scss";
import classNames from "classnames";

interface SessionTimeProps {
  id: number;
  time: string;
  movieId: number;
}

export const SessionTime = ({ id, time, movieId }: SessionTimeProps) => {
  return (
    <Link
      to={`/movie/${movieId}/sessions/${id}`}
      className={classNames(style.SessionTime, "hover")}
    >
      {time}
    </Link>
  );
};

export default SessionTime;
