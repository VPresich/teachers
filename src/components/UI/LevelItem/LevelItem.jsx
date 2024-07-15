import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./LevelItem.module.css";

export default function LevelItem({ title, isActive }) {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.container}>
      <span className={clsx(css.title, isActive && css[theme])}># {title}</span>
    </div>
  );
}
