import { ReactNode } from "react";
import classNames from "classnames";
import style from "./Title.module.scss";

interface TitleProps {
  children: ReactNode;
  center?: boolean;
}

export const Title = (props: TitleProps) => {
  return (
    <div>
      <h1 className={classNames({[style.center]: props.center})}>{props.children} </h1>
    </div>
  );
};
