import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Title } from "../Title";
import classNames from "classnames";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <div className={style.header}>
      <Link to="/" className={classNames("hover", style.back_btn)}>
        Main
      </Link>
      <Title center className={style.title}>
        {title}
      </Title>
    </div>
  );
};
