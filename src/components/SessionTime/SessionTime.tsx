import { Link } from "react-router-dom";
import style from "./SessionTime.module.scss";
import classNames from "classnames";

interface SessionTimeProps {
  id: number;
  time: string;
}

export const SessionTime = ({ id, time }: SessionTimeProps) => {
  return (
    <Link
      to={`/sessions/${id}`}
      className={classNames(style.SessionTime, "hover")}
    >
      {time}
    </Link>
  );
};

export default SessionTime;
